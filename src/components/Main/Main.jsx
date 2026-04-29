import { useState } from "react";
import { Profile } from "../Profile/Profile.jsx";
import { NewCard } from "./Components/Popup/Form/NewCard/NewCard.jsx";
import { EditProfile } from "./Components/Popup/Form/EditProfile/EditProfile.jsx";
import { EditAvatar } from "./Components/Popup/Form/EditAvatar/EditAvatar.jsx";
import { Modal } from "./Components/Modal.jsx";
import { Card } from "./Components/Card/Card.jsx";
import { ModalImage } from "./Components/Popup/Form/ModalImage/ModalImage.jsx";
import imageProfile from '../../assets/profile-img.jpg';
import "./Main.css";


const cards = [
  {
    isLiked: true,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

console.log(cards);

function Main() {
    const [modal, setModal] = useState(null);

        const EditProfileModal = { title: "Editar perfil", children: <EditProfile /> };        
        const NewCardModal = { title: "Nuevo lugar", children: <NewCard /> };
        const EditAvatarModal = { title: "Cambiar foto de perfil", children: <EditAvatar /> };     
        // const DeleteCardModal = { title: "¿Estás seguro?", children: <DeleteCard /> };

        function handleOpenModal(modalData) {
            setModal(modalData);
        };

        function handleCloseModal() {
            setModal(null);
        }

    return (
        <main className="main">
            <Profile 
                onEditAvatar={() => handleOpenModal(EditAvatarModal)}
                onAddCard={() => handleOpenModal(NewCardModal)}
                onEditProfile={() => handleOpenModal(EditProfileModal)}
                handleOpenImage={() => handleOpenModal({ children: <ModalImage link={imageProfile} name="Foto de perfil" /> })}
            />

            <ul className="cards-container">
                {cards.map((card) => {
                    return (
                        <Card 
                            key={card._id}
                            name={card.name}
                            link={card.link}
                            isLiked={card.isLiked}
                            handleOpenImage={() => handleOpenModal({ children: <ModalImage link={card.link} name={card.name} /> })}
                        />
                    )
                })}
 
            </ul>
            
            {modal && (
                <Modal onClose={handleCloseModal} title={modal.title}>
                    {modal.children}
                </Modal>
            )}
        </main>
    )
};

export { Main }