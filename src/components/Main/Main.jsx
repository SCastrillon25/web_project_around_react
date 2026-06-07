    import { useState, useEffect, useContext } from "react";
    import { Profile } from "../Profile/Profile.jsx";
    import { NewCard } from "./Components/Popup/Form/NewCard/NewCard.jsx";
    import { EditProfile } from "./Components/Popup/Form/EditProfile/EditProfile.jsx";
    import { EditAvatar } from "./Components/Popup/Form/EditAvatar/EditAvatar.jsx";
    import { Popup } from "./Components/Popup.jsx";
    import { Card } from "./Components/Card/Card.jsx";
    import { ImagePopup } from "./Components/Popup/Form/ImagePopup/ImagePopup.jsx";
    import { DeleteCard } from "./Components/Popup/Form/DeleteCard/DeleteCard.jsx";
    import { api } from "../../../src/utils/api.jsx";
    import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
    import imageProfile from '../../assets/profile-img.jpg';
    import "./Main.css";


    function Main(props) {
        const { modal, cards, setCards, handleOpenModal, handleCloseModal, handleDeleteCard, handleLikeCard, handleAddPlace } = props;
        
        const {currentUser} = useContext(CurrentUserContext);
            
            const EditProfileModal = { title: "Editar perfil", children: <EditProfile  handleCloseModal={handleCloseModal} /> };        
            const NewCardModal = { title: "Nuevo lugar", children: <NewCard handleAddPlace={handleAddPlace} /> };
            const EditAvatarModal = { title: "Cambiar foto de perfil", children: <EditAvatar /> };     
         

        return (
            <main className="main">
                <Profile 
                    name={currentUser?.name}
                    description={currentUser?.about}
                    avatar={currentUser?.avatar}
                    onEditAvatar={() => handleOpenModal(EditAvatarModal)}
                    onAddCard={() => handleOpenModal(NewCardModal)}
                    onEditProfile={() => 
                        handleOpenModal(EditProfileModal)  
                                              
                    }
                    handleOpenImage={() => handleOpenModal({ children: <ImagePopup link={imageProfile} name="Foto de perfil" /> })}
                    
                />

                <ul className="cards-container">
                    {cards.map((card) => {
                        return (
                            <Card 
                                key={card._id}
                                name={card.name}
                                link={card.link}
                                isLiked={card.isLiked}
                                handleOpenImage={() => handleOpenModal({ children: <ImagePopup link={card.link} name={card.name} /> })}
                                handleLikeCard={() => handleLikeCard(card)}
                                handleDeleteConfirmate={() => {
                                    handleOpenModal({
                                        title: "¿Estás seguro?",
                                        children: (
                                            <DeleteCard 
                                                card={card}
                                                handleDeleteCard={handleDeleteCard} 
                                                handleCloseModal={handleCloseModal}                                 
                                            />
                                        )
                                    });
                                }}
                                                             
                            />
                        )
                    })}
    
                </ul>
                
                {modal && (
                    <Popup onClose={handleCloseModal} title={modal.title}>
                        {modal.children}
                    </Popup>
                )}
            </main>
        )
    };

    export { Main }