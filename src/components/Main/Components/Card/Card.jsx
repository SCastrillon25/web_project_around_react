import './Card.css';

function Card(props) {
    const { name, link, isLiked, handleOpenImage } = props;
    
    return (
        <li className="card">
            <button 
                aria-label="Delete card"
                className="card__button-delete" 
                type="button">
            </button>
            <img className="card__image" src={link} alt={name} onClick={handleOpenImage}/>
            <div className="card__description">
                <p className="card__title">{name}</p>
                <button
                    aria-label="Like card"
                    className="card__button-like" 
                    type="button">
                    {/* {isLiked ? "Liked" : "Like"} */}
                </button>
            </div>
        </li>
    );
}

export { Card };