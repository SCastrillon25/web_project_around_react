import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../../../../../contexts/CurrentUserContext.jsx';
import './EditProfile.css';

function EditProfile(props) {
    const { handleCloseModal } = props;
    const {currentUser, handleUpdateUser} = useContext(CurrentUserContext);

    const [ name, setName ] = useState(currentUser.name);
    const [ description, setDescription ] = useState(currentUser.about);

    useEffect(() => {
        setName(currentUser?.name || "");
        setDescription(currentUser?.about || "");
    }, [currentUser]);
    
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del envío de formularios

    handleUpdateUser({ name: name, about: description }); // Actualiza la información del usuario ????
  };

    return (
        <form className="form modal-edit__form" onSubmit={handleSubmit}>
            <fieldset className="form__set">
                <label className="form__field">
                    <input 
                        type="text" 
                        name="name" 
                        className="form__input modal-edit__input modal-edit__input-name" 
                        id="name-input" 
                        placeholder="Nombre" 
                        minLength="2" 
                        maxLength="40" 
                        required
                        value={name}
                        onChange={handleNameChange} 
                    />
                    <span className="form__error name-input-error">Por favor, rellena este campo.</span>
                </label>
                     
                <label className="form__field">
                    <input 
                        type="text"     
                        name="description" 
                        className="form__input modal-edit__input modal-edit__input-description" 
                        id="description-input" 
                        placeholder="description" 
                        minLength="2" 
                        maxLength="200" 
                        required 
                        value={description} 
                        onChange={handleDescriptionChange} 
                    />
                    <span className="form__error form__error-description description-input-error">Por favor, rellena este campo.</span>
                </label>
                     
                <button className="form__input form__input-submit modal-edit__submit submit" type="submit" onSubmit={handleSubmit}>Guardar</button>
            </fieldset>                  
        </form>
    )
}

export { EditProfile }