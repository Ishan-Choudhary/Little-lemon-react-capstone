import Nav from "./Nav";
import Logo from "../assests/images/Logo.svg";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <img src={Logo} alt="Little lemon logo" />
      <Nav />
    </header>
  );
};

export default Header;
