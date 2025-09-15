import profilePicture from "../../images/profile-img.jpg";
import pencil from "../../images/pencil-icon.png";
import add from "../../images/add-button.png";
import Popup from "./components/Popup/Popup";
import { useState } from "react";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";

function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Novo Local", children: <NewCard /> };
  const editProfile = { title: "Editar Perfil", children: <EditProfile /> };
  const editAvatar = {
    title: "Atualizar a foto de perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }
  console.log(popup);
  return (
    <>
      <section className="profile">
        <div className="profile__view">
          <div
            className="profile__avatar-container"
            onClick={() => handleOpenPopup(editAvatar)}
          >
            <img
              className="profile__img"
              src={profilePicture}
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
            <h2 className="profile__name">Jacques Coasteau</h2>
            <h2 className="profile__job">Explorador</h2>
            <button
              type="button"
              className="profile__edit-button"
              onClick={() => handleOpenPopup(editProfile)}
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
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img
            className="profile__add-img"
            src={add}
            alt="Botão para adicionar conteúdo a página"
          />
        </button>
      </section>

      <section className="elements">
        <ul className="elements__card elements"></ul>
        <template id="template-card">
          <li className="elements__li">
            <button type="button" className="elements__trash">
              <img
                className="elements__button-trash"
                src="./images/trash.png"
                alt="ícone de lixeira"
              />
            </button>
            <img className="elements__card-img" src="#" alt="" />
            <div className="elements__card-text">
              <p className="elements__card-name"></p>
              <div className="elements__like">
                <button
                  type="button"
                  className="elements__button-like"
                ></button>
              </div>
            </div>
          </li>
        </template>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </>
  );
}

export default Main;
