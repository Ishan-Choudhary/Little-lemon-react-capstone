import GreekSalad from "../assests/images/greek salad.jpg";
import Bruchetta from "../assests/images/bruchetta.jpg";
import LemonDessert from "../assests/images/lemon dessert.jpg";

import "../assests/styles/SpecialsStyle.css";

const Specials = () => {
  return (
    <article>
      <div className={"cover"} style={{ height: "58vh" }}></div>
      <section className="specials-header">
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
      </section>
      <div>
        <img
          src={GreekSalad}
          alt="Our greek salad"
          width={264.67}
          height={182.26}
        />
        <div>
          <div>
            <h3>Greek salad</h3>
            <p>$12.99</p>
          </div>
          <div>
            The famous greek salad of crispy lettuce, peppers, olives our
            Chicago styles feta cheese, garnished with cruncy garlic and
            rosemary croutons.
          </div>
          <button>Order a delivery</button>
        </div>
      </div>
      <div>
        <img
          src={Bruchetta}
          alt="Our Bruchetta"
          width={264.67}
          height={182.26}
        />
        <div>
          <div>
            <h3>Bruchetta</h3>
            <p>$5.99</p>
          </div>
          <div>
            Our bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </div>
          <button>Order a delivery</button>
        </div>
      </div>
      <div>
        <img
          src={LemonDessert}
          alt="Our lemon dessert"
          width={264.67}
          height={182.26}
        />
        <div>
          <div>
            <h3>Lemon Dessert</h3>
            <p>$5.00</p>
          </div>
          <div>
            This comes straight from grandoma's recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined
          </div>
          <button>Order a delivery</button>
        </div>
      </div>
    </article>
  );
};

export default Specials;
