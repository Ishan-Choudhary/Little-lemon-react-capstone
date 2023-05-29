import { Link } from "react-router-dom";
import "../assests/styles/NavStyle.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav>
      <ul className={"nav"}>
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
      <FontAwesomeIcon
        icon={isClicked ? faX : faBars}
        className={"navMenu"}
        onClick={() => setIsClicked(!isClicked)}
      />

      <div
        className={"dropdown"}
        style={
          isClicked
            ? {
                visibility: "visible",
                transform: "translateY(-40px)",
                transition: "transform 0.5s",
              }
            : {
                transform: "translateY(-80vh)",
                transition: "transform 0.5s",
              }
        }
      >
        <FontAwesomeIcon
          icon={isClicked ? faX : faBars}
          className={"navMenu"}
          onClick={() => setIsClicked(!isClicked)}
          style={{
            color: "#edefee",
            border: "solid 1px #edefee",
            borderRadius: "50%",
            padding: "10px",
          }}
        />
        <div>
          <Link to="/">
            <h4>Home</h4>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h4>About</h4>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h4>Menu</h4>
          </Link>
        </div>
        <div>
          <Link to="/reservation">
            <h4>Reservations</h4>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h4>Order Online</h4>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h4>Login</h4>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
