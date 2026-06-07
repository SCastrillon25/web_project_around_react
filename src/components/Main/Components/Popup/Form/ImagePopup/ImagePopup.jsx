import './ImagePopup.css';

function ImagePopup(props) {
    const { link, name } = props;
    return (
         <>
            <img 
                className="modal-image__image" 
                src={link} 
                alt={name} 
            />
            <p className="modal-image__title">{name}</p>
         </>        
    );
}

export { ImagePopup };