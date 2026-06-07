import './DeleteCard.css';

function DeleteCard( props ) {
  const { card, handleDeleteCard } = props;
  return (
    <form className="form modal-delete-card">
        <button onClick={() => handleDeleteCard(card)} className="form__input form__input-submit modal-delete__submit submit" type="submit">Sí</button>   
    </form>
  )
}

export { DeleteCard };