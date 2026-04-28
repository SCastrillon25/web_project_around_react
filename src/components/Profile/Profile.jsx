import imageProfile from '../../assets/profile-img.jpg';
import '../Profile/Profile.css';


function Profile(props) {
    return (
        <div className="profile">
            <div className="profile__container-image">
                <div className="profile__container-image__hover profile__container-image__hover-active">
                    <button type="submit" className="profile__container-image_hover-button" onClick={props.onEditAvatar}></button> 
                </div>
                <img className="profile__image" src={imageProfile} alt="image of profile" onClick={props.handleOpenImage} />
            </div>

            <div className="profile__data">
                <h2 className="profile__name">Sebastian</h2>
                <h3 className="profile__description">Programador</h3>
                <div className="profile__container-button">
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                </div>
            </div>
            <button className="profile__button-add" type="button" onClick={props.onAddCard}></button>
        </div>
    )
};

export { Profile }