import { Link } from "react-router-dom";

import RestaurantImage from "../assests/images/restaurant.jpg";
import "../assests/styles/FooterStyle.css";
const Footer = ({ needed, classNeeded }) => {
  return (
    <article>
      <div className={needed ? classNeeded : ""}></div>
      <footer className={"footer-bg"}>
        <div
          className="footer-image"
          style={{ width: "162px", height: "279px", border: "solid 1px black" }}
        >
          <img
            src={RestaurantImage}
            alt="Our restaurant"
            width="162px"
            height="279px"
          />
        </div>
        <div className="footer-nav">
          <section className="doormat-nav">
            <h5>Doormat Navigation</h5>
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
          </section>
          <section className="contact">
            <h5>Contact</h5>
            <p>Address</p>
            <p>phone number</p>
            <p>email</p>
          </section>
          <section className="social-media">
            <h5>Social Media Links</h5>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Linkeding</p>
          </section>
        </div>
      </footer>
    </article>
  );
};

export default Footer;
