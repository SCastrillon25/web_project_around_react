import iconLike from '../../../../assets/like-icon.svg';
import iconLikeActive from '../../../../assets/icon-like-black.svg';
import { useContext } from 'react';
import { CurrentUserContext } from '../../../../context/CurrentUserContext.jsx';
import './Card.css';



function Card(props) {
    const { name, link, isLiked, handleOpenImage, handleLikeCard, handleDeleteConfirmate } = props;

    const { currentUser } = useContext(CurrentUserContext);

    return (
        <li className="card">
            <button 
                aria-label="Delete card"
                className="card__button-delete" 
                type="button"
                onClick={handleDeleteConfirmate}
            >
            </button>
            <img className="card__image" src={link} alt={name} onClick={handleOpenImage}/>
            <div className="card__description">
                <p className="card__title">{name}</p>
                <button
                    aria-label="Like card"
                    className = {`card__button-like ${isLiked ? 'card__button-like_is-active' : ''}`}
                    type="button"
                    onClick={handleLikeCard}>
                    <img src={isLiked ? iconLikeActive : iconLike} alt={isLiked ? "Liked" : "Like"} />
                </button>
            </div>
        </li>
    );
}

export { Card };