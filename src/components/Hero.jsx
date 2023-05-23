import HeroImage from "../assests/images/restauranfood.jpg";

const Hero = () => {
  return (
    <article>
      <section className="hero-section">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant focused on traditional
          recipes served with a modern twist
        </p>
        <button>Reserve a Table</button>
      </section>
      <figure>
        <img src={HeroImage} alt="Restaurant food" width={364} height={434} />
      </figure>
    </article>
  );
};

export default Hero;
