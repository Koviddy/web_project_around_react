import trashIcon from "../../../../images/trash.png";
import ImagePopup from "../ImagePopup/ImagePopup";

function Card(props) {
  const { name, link, isLiked } = props.card;
  const imagePopup = { children: <ImagePopup card={props.card} /> };

  return (
    <li className="elements__li">
      <button type="button" className="elements__trash">
        <img
          className="elements__button-trash"
          src={trashIcon}
          alt="ícone de lixeira"
        />
      </button>
      <img
        className="elements__card-img"
        src={link}
        alt=""
        onClick={() => {
          props.handleOpenPopup(imagePopup);
        }}
      />
      <div className="elements__card-text">
        <p className="elements__card-name">{name}</p>
        <div className="elements__like">
          <button
            type="button"
            className={
              isLiked ? "elements__button-like_click" : "elements__button-like"
            }
          ></button>
        </div>
      </div>
    </li>
  );
}

export default Card;
