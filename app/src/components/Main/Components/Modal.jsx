import './Modal.css';

function Modal(props) {
    const { onClose, title, children } = props;

    return (
        <div className="modal">
            <div className={title ? "modal__container" : "modal__container modal__container-image"} id="modal-container">
                <button 
                    type="button" 
                    className="modal__button-close" 
                    onClick={onClose}>
                </button>
                {title && <h4 className="modal__title">{title}</h4>}
                {children}
            </div>
        </div>
    );
};

export { Modal }