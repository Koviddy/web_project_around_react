import logo from "../../images/logo-vector.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo da página Around us" />
    </header>
  );
}

export default Header;
