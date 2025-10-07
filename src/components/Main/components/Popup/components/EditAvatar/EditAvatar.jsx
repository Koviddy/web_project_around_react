import { useContext, useState } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateAvatar } = userContext;

  const [avatar, setAvatar] = useState(currentUser.avatar);

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateAvatar({
      avatar: avatar,
    });
  }

  return (
    <form
      className="popup__form popup__form_avatar"
      novalidate
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__set">
        <label>
          <input
            id="avatar-url-input"
            placeholder="Link da nova foto"
            type="url"
            className="popup__form-input popup__form-input_avatar"
            name="avatar"
            required
            value={avatar}
            onChange={handleAvatarChange}
          />
          <span className="avatar-url-input-error"></span>
        </label>
        <button type="submit" className="popup__button-submit">
          Salvar
        </button>
      </fieldset>
    </form>
  );
}
