import HeroImage from "../assests/images/restauranfood.jpg";
import GreekSalad from "../assests/images/greek salad.jpg";
import Bruchetta from "../assests/images/bruchetta.jpg";
import LemonDessert from "../assests/images/lemon dessert.jpg";
import ImageA from "../assests/images/Mario and Adrian A.jpg";
import ImageB from "../assests/images/Mario and Adrian b.jpg";

const Main = () => {
  return (
    <main>
      <article>
        <section className="hero-section">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant focused on
            traditional recipes served with a modern twist
          </p>
          <button>Reserve a Table</button>
        </section>
        <figure>
          <img src={HeroImage} alt="Restaurant food" width={364} height={434} />
        </figure>
      </article>
      <article>
        <section>
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
              Our bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
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
      <article>
        <h2>Testimonials</h2>
        <div>
          <div>
            <p>Rating </p>
            <div>
              <div
                style={{
                  border: "solid 1px black",
                  padding: "25px",
                  width: "10px",
                }}
              ></div>
              <p>Name</p>
            </div>
            <p>Review text</p>
          </div>
          <div>
            <p>Rating </p>
            <div>
              <div
                style={{
                  border: "solid 1px black",
                  padding: "25px",
                  width: "10px",
                }}
              ></div>
              <p>Name</p>
            </div>
            <p>Review text</p>
          </div>
          <div>
            <p>Rating </p>
            <div>
              <div
                style={{
                  border: "solid 1px black",
                  padding: "25px",
                  width: "10px",
                }}
              ></div>
              <p>Name</p>
            </div>
            <p>Review text</p>
          </div>
          <div>
            <p>Rating </p>
            <div>
              <div
                style={{
                  border: "solid 1px black",
                  padding: "25px",
                  width: "10px",
                }}
              ></div>
              <p>Name</p>
            </div>
            <p>Review text</p>
          </div>
        </div>
      </article>
      <article>
        <section>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.{" "}
          </p>
        </section>
        <img src={ImageA} alt="Chef learning" width={272} height={338} />
        <img src={ImageB} alt="Chef laughing" width={272} height={338} />
      </article>
    </main>
  );
};

export default Main;
