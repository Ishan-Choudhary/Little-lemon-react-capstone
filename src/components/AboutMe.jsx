import ImageA from "../assests/images/Mario and Adrian A.jpg";
import ImageB from "../assests/images/Mario and Adrian b.jpg";

import "../assests/styles/AboutMeStyle.css";

const AboutMe = () => {
  return (
    <article className={"about-bg"}>
      <section className={"about-section"}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a charming neighborhood bistro that serve simple food and
          classic cocktails in a lively but casual environment. The restaurant
          features a locally-sourced menu with daily specials.
        </p>
      </section>
      <div className={"about-images"}>
        <div id="B">
          <img src={ImageA} alt="Chef learning" width={272} height={338} />
        </div>
        <div id="A">
          <img src={ImageB} alt="Chef laughing" width={272} height={338} />
        </div>
      </div>
    </article>
  );
};

export default AboutMe;
