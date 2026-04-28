import "./EditAvatar.css";

function EditAvatar() {
    return (
        <form className="form modal-newAvatar__form">
            <fieldset className="form__set">                      
               <label className="form__field">
                    <input type="url" name="url" className="form__input modal-newAvatar__input modal-newAvatar__input-url" id="url-avatar-input"  placeholder="Enlace a la imagen" required />
                    <span className="form__error url-avatar-input-error">Por favor, rellena este campo.</span>
                </label>
                     
                <button className="form__input form__input-submit modal-newAvatar__submit submit" type="submit">Guardar</button>
            </fieldset>
        </form>
    );
}

export { EditAvatar };