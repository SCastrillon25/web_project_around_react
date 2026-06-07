import './NewCard.css';

function NewCard(props) {
    const { handleAddPlace } = props;

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del envío de formularios
        
        handleAddPlace({
            name: event.target.title.value,
            link: event.target.url.value
        }); // Actualiza la información del usuario ????
    };

    return (
        <form 
            className="form modal-place__form" 
            name="card-form" 
            id="new-card-form" 
            noValidate 
            onSubmit={handleSubmit}>
            <fieldset className="form__set modal-place__set">
                <label className="form__field">
                    <input 
                        type="text" 
                        name="title" 
                        className="form__input modal-place__input modal-place__input-title" 
                        id="title-input" 
                        placeholder="Titulo" 
                        minLength="2" 
                        maxLength="30" 
                        required 
                    />
                    <span className="form__error title-input-error">Por favor, rellena este campo.</span>
                </label>
                      
                <label className="form__field">
                    <input type="url" name="url" className="form__input modal-place__input modal-place__input-url" id="url-input"  placeholder="Enlace a la imagen" required />
                    <span className="form__error url-input-error">Por favor, rellena este campo.</span>
                </label>
                     
                <button className="form__input form__input-submit modal-place__submit submit" type="submit">crear</button>
            </fieldset>  
        </form>
    )
}

export { NewCard }