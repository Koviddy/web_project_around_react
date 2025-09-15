export default function EditProfile() {
  return (
    <form className="popup__form" novalidate>
      <fieldset className="popup__set">
        <h2 className="popup__title">Editar perfil</h2>
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
