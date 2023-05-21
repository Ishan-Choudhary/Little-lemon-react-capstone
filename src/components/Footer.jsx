import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        className="footer-image"
        style={{ width: "162px", height: "279px", border: "solid 1px black" }}
      ></div>
      <div className="doormat-nav">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/">
          <p>About</p>
        </Link>
        <Link to="/">
          <p>Menu</p>
        </Link>
        <Link to="/reservation">
          <p>Reservations</p>
        </Link>
        <Link to="/">
          <p>Order Online</p>
        </Link>
        <Link to="/">
          <p>Login</p>
        </Link>
      </div>
      <div className="contact">
        <p>Address</p>
        <p>phone number</p>
        <p>email</p>
      </div>
      <div className="social-media">
        <p>Twitter</p>
        <p>Instagram</p>
        <p>Linkeding</p>
      </div>
    </footer>
  );
};

export default Footer;
