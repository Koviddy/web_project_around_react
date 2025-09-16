export default function EditAvatar() {
  return (
    <form className="popup__form popup__form_avatar" novalidate>
      <fieldset className="popup__set">
        <label>
          <input
            id="avatar-url-input"
            placeholder="Link da nova foto"
            type="url"
            className="popup__form-input popup__form-input_avatar"
            name="avatar"
            required
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
