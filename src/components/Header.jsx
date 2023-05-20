import Nav from "./Nav";
import Logo from "../assests/images/Logo.svg";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Little lemon logo" />
      <Nav />
    </header>
  );
};

export default Header;
