import pencil from "../../images/pencil-icon.png";
import add from "../../images/add-button.png";
import Popup from "./components/Popup/Popup";
import { useContext } from "react";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Main(props) {
  const { onOpenPopup, onClosePopup, popup, cards, onCardLike, onCardDelete } =
    props;

  const {
    currentUser: { name, about, avatar },
  } = useContext(CurrentUserContext);

  const newCardPopup = { title: "Novo Local", children: <NewCard /> };
  const editProfile = { title: "Editar Perfil", children: <EditProfile /> };
  const editAvatar = {
    title: "Atualizar a foto de perfil",
    children: <EditAvatar />,
  };

  return (
    <>
      <section className="profile">
        <div className="profile__view">
          <div
            className="profile__avatar-container"
            onClick={() => onOpenPopup(editAvatar)}
          >
            <img
              className="profile__img"
              src={avatar}
              alt="Foto de perfil do usuário"
            />
            <div className="profile__avatar-overlay"></div>
            <img
              className="profile__avatar-pencil"
              src={pencil}
              alt="Editar avatar"
            />
          </div>
          <div className="profile__description">
            <h2 className="profile__name">{name}</h2>
            <h2 className="profile__job">{about}</h2>
            <button
              type="button"
              className="profile__edit-button"
              onClick={() => onOpenPopup(editProfile)}
            >
              <img
                className="profile__edit-button-img"
                src={pencil}
                alt="Botão de editar o texto do perfil do usuário"
              />
            </button>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={() => onOpenPopup(newCardPopup)}
        >
          <img
            className="profile__add-img"
            src={add}
            alt="Botão para adicionar conteúdo a página"
          />
        </button>
      </section>

      <section className="elements">
        <ul className="elements__card elements">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onOpenPopup={onOpenPopup}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
        <template id="template-card"></template>
      </section>
      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </>
  );
}

export default Main;
