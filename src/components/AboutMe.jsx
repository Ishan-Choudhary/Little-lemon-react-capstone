import ImageA from "../assests/images/Mario and Adrian A.jpg";
import ImageB from "../assests/images/Mario and Adrian b.jpg";

const AboutMe = () => {
  return (
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
  );
};

export default AboutMe;
