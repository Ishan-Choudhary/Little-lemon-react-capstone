import { specialsData } from "../assests/data/specialsData.js";

import "../assests/styles/SpecialsStyle.css";
import OrderBtn from "./Button/OrderBtn.jsx";
import PrimaryBtn from "./Button/PrimaryBtn.jsx";

const SpecialsItem = ({ imgUrl, dishName, dishDesc, dishPrice }) => {
  const cardStyle = {
    // height: "460px",
    margin: "20px 10px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "spaceEvenly",
    border: "solid 1px black",
    borderRadius: "16px",
  };

  const cardTitleStyle = {
    fontFamily: "Karla, sans-serif",
    fontWeight: "700",
    fontSize: "18pt",
  };

  return (
    <div style={cardStyle}>
      <div style={{ height: "186px", overflow: "hidden" }}>
        <img
          src={imgUrl}
          alt={dishName}
          width={"100%"}
          style={{ borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flex: "1 0 auto",
          flexDirection: "row",
          margin: "0px 10px",
          justifyContent: "space-between",
        }}
      >
        <h2 style={cardTitleStyle}>{dishName}</h2>
        <h2 style={({ ...cardTitleStyle }, { color: "#ee9972" })}>
          {dishPrice}
        </h2>
      </div>
      <h3
        style={{
          fontFamily: "Karla, sans-serif",
          fontSize: "16pt",
          fontWeight: "400",
          margin: "30px 10px",
        }}
      >
        {dishDesc}
      </h3>
      <div style={{ paddingBottom: "20px" }}>
        <OrderBtn />
      </div>
    </div>
  );
};

const Specials = () => {
  return (
    <article>
      <div className="cover"></div>
      <section className="specials-header">
        <h1>Specials!</h1>
        <br />
        <PrimaryBtn content={"Online Menu"} />
      </section>

      <section className="items-list">
        {specialsData.map((curr) => (
          <SpecialsItem
            key={curr.key}
            imgUrl={curr.image}
            dishName={curr.name}
            dishDesc={curr.description}
            dishPrice={curr.price}
          />
        ))}
      </section>
    </article>
  );
};

export default Specials;
