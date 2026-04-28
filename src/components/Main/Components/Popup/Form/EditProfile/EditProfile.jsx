import './EditProfile.css';

function EditProfile() {
    return (
        <form className="form modal-edit__form">
            <fieldset className="form__set">
                <label className="form__field">
                    <input type="text" name="name" className="form__input modal-edit__input modal-edit__input-name" id="name-input" placeholder="Nombre" minlength="2" maxlength="40" required />
                    <span className="form__error name-input-error">Por favor, rellena este campo.</span>
                </label>
                     
                <label className="form__field">
                    <input type="text" name="description" className="form__input modal-edit__input modal-edit__input-description" id="description-input" placeholder="description" minlength="2" maxlength="200" required />
                    <span className="form__error form__error-description description-input-error">Por favor, rellena este campo.</span>
                </label>
                     
                <button className="form__input form__input-submit modal-edit__submit submit" type="submit">Guardar</button>
            </fieldset>                  
        </form>
    )
}

export { EditProfile }