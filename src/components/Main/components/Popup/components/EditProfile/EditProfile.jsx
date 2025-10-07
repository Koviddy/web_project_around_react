import { useContext, useState } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext";

export default function EditProfile() {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUpdateUser({ name, about: description });
  };

  return (
    <form className="popup__form" novalidate onSubmit={handleSubmit}>
      <fieldset className="popup__set">
        <label>
          <input
            id="name-input"
            className="popup__form-input popup__form-input_name"
            placeholder="Nome"
            type="text"
            name="name"
            minlength="2"
            maxlength="40"
            required
            value={name}
            onChange={handleNameChange}
          />
          <span className="name-input-error"></span>
        </label>
        <label>
          <input
            id="about-input"
            className="popup__form-input popup__form-input_about"
            placeholder="Sobre"
            type="text"
            name="about"
            minlength="2"
            maxlength="200"
            required
            value={description}
            onChange={handleDescriptionChange}
          />
          <span className="about-input-error"></span>
        </label>
        <button type="submit" className="popup__button-submit">
          Salvar
        </button>
      </fieldset>
    </form>
  );
}
