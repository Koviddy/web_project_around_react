export default function ImagePopup(props) {
  const { card } = props;

  return (
    <>
      <img className="popup__img-zoom" src={card.link} alt="" />
      <p className="popup__description">{card.title}</p>
    </>
  );
}
