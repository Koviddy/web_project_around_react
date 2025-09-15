import closeIcon from "../../../../images/close-icon.png";

export default function Popup(props) {
  //children é o conteúdo de popup
  const { title, children, onClose } = props;
  return (
    <div className="popup__container">
      <button type="button" className="popup__close-icon" onClick={onClose}>
        <img
          className="popup__close-icon-img"
          src={closeIcon}
          alt="ìcone para fechar o pop-up"
        />
      </button>
      <h2 className="popup__title">{title}</h2>
      {children}
    </div>
  );
}
