import closeIcon from "../../../../images/close-icon.png";

export default function Popup(props) {
  const { title, children, onClose } = props;
  return (
    <div className="popup popup_opened">
      <div className={`popup__container ${!title ? "popup__container-img" : ""}`}>
        <button type="button" className="popup__close-icon" onClick={onClose}>
          <img
            className="popup__close-icon-img"
            src={closeIcon}
            alt="ìcone para fechar o pop-up"
          />
        </button>
        {title && <h2 className="popup__title">{title}</h2>}
        {children}
      </div>
    </div>
  );
}