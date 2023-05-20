const Footer = () => {
  return (
    <footer>
      <div
        className="footer-image"
        style={{ width: "162px", height: "279px", border: "solid 1px black" }}
      ></div>
      <div className="doormat-nav">
        <p>Home</p>
        <p>About</p>
        <p>Menu</p>
        <p>Reservation</p>
        <p>Order Online</p>
        <p>Login</p>
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
