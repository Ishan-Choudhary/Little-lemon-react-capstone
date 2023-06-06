import Nav from "./Nav";
import Logo from "../assests/images/Logo.svg";

import { useState, useEffect } from "react";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={
        sticky
          ? {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              position: "sticky",
              top: "0",
              zIndex: "10000",
              backgroundColor: "#fbdabb",
              paddingBottom: "10px",
              height: "fit-content",
            }
          : {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }
      }
    >
      <img src={Logo} alt="Little lemon logo" />
      <Nav />
    </header>
  );
};

export default Header;
