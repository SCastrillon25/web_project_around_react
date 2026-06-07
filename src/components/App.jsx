import { useState, useEffect } from "react";
import { api } from "../../src/utils/api.jsx";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { Header } from "./Header/Header.jsx";
import { Profile } from "./Profile/Profile.jsx";
import { Main } from "./Main/Main.jsx";
import { Footer } from "./Footer/Footer.jsx";


function App() {
  const [modal, setModal] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {           
    let cardsData = api.getCards()
    .then((cardsData) =>
     setCards(cardsData)
   )
   .catch(error => 
      console.error('Error:', error)
    );
  }, []);

  function handleLikeCard(cardsData) {
    // Verifica una vez más si a esta tarjeta ya les has dado like
    const isLiked = cardsData.isLiked;        
    // Envía una solicitud a la API y obtén los datos actualizados de la tarjeta
    api.likeCard(cardsData._id, isLiked)
    .then((updatedCard) => {
    // Actualiza el estado de las tarjetas con los datos actualizados de la tarjeta que se ha dado like o se ha quitado el like
      setCards((cards) => 
        cards.map((card) => 
          card._id === cardsData._id ? updatedCard : card
        )
      );
    })        
    .catch((error) => {
      console.error('Error:', error);
   });
  }

  const handleDeleteCard = (card) => {
    event.preventDefault();

    api.cardDelete(card._id)
    .then(() => {
      setCards((cards) =>
        cards.filter((c) => c._id !== card._id)
      );
      handleCloseModal();
    })
    .catch(console.error);
  };
  
 

  function handleOpenModal(modalData) {
    setModal(modalData);
 };

  function handleCloseModal() {
    setModal(null);
  };
  
  useEffect(() => {
    let userData = api.getDataUser()
    .then((userData) => {
      return userData;
      
    })
    .then((userData) => 
      setCurrentUser(userData)
   )
    .catch(error => 
      console.error('Error:', error)
    );
  }, []);

  const handleUpdateUser = (data) => {
    let newUserData = api.setUserInfo(data)
    .then((newUserData) => {
      return newUserData;
    })
    .then((newUserData) => {
      setCurrentUser(newUserData);
      handleCloseModal();
    })
    .catch(error => 
      console.error('Error:', error)
    );
  };

  const handleUpdateAvatar = (data) => {
    let newAvatarData = api.setUserAvatar(data)
    .then((newAvatarData) => {
      return newAvatarData;
    })
    .then((newAvatarData) => {
      setCurrentUser(newAvatarData);
      handleCloseModal();
    })
    .catch(error => 
      console.error('Error:', error)
    );
  };

  const handleAddPlace = (data) => {
    let newCardData = api.createCard(data)
    .then((newCardData) => {
      console.log(newCardData);
      return newCardData;
    })
    .then((newCardData) => {
      setCards(cards => [newCardData, ...cards]);
      handleCloseModal();
    })
  }

  return (
    <>
      <div className="page">  
        <CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar}}>
          <Header />
          <Main 
            modal={modal}
            cards={cards}
            handleLikeCard={handleLikeCard}
            handleDeleteCard={handleDeleteCard}
            handleOpenModal={handleOpenModal} 
            handleCloseModal={handleCloseModal}
            handleAddPlace={handleAddPlace} 
          />
          <Footer />  
        </CurrentUserContext.Provider>
      </div> 
    </>
  )
}
export { App };
