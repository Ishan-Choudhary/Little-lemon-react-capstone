import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/">
          <li>About</li>
        </Link>
        <Link to="/">
          <li>Menu</li>
        </Link>
        <Link to="/reservation">
          <li>Reservations</li>
        </Link>
        <Link to="/">
          <li>Order Online</li>
        </Link>
        <Link to="/">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
