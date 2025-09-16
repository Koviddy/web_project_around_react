export default function NewCard() {
  return (
    <form className="popup__form popup__form_add" novalidate>
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
