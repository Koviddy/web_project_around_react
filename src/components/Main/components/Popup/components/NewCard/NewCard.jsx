import { useContext, useState } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext";

export default function NewCard() {
  const userContext = useContext(CurrentUserContext);
  const { handleAddPlaceSubmit } = userContext;

  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    handleAddPlaceSubmit({
      name: name,
      link: link,
    });
  }

  return (
    <form
      className="popup__form popup__form_add"
      novalidate
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__set">
        <label>
          <input
            id="title-input"
            placeholder="Título"
            type="text"
            className="popup__form-input popup__form-input_title"
            name="name"
            minlength="2"
            maxlength="30"
            required
            value={name}
            onChange={handleNameChange}
          />
          <span className="title-input-error"></span>
        </label>
        <label>
          <input
            id="url-input"
            placeholder="Link da Imagem"
            type="url"
            className="popup__form-input popup__form-input_link"
            name="image"
            required
            value={link}
            onChange={handleLinkChange}
          />
          <span className="url-input-error"></span>
        </label>
        <button type="submit" className="popup__button-submit">
          Criar
        </button>
      </fieldset>
    </form>
  );
}
