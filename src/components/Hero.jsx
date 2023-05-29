import HeroImage from "../assests/images/restauranfood.jpg";
import "../assests/styles/HeroStyle.css";
import PrimaryBtn from "./Button/PrimaryBtn";

const Hero = () => {
  const imageStyle = {};

  return (
    <article className="hero-bg">
			<div className="hero-cover">
				<section className="hero-section">
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<div className={"hero-about"}>
						<p>
							We are a family owned Mediterranean restaurant focused on
							traditional recipes served with a modern twist
						</p>
					</div>
					<PrimaryBtn content="Reserve a Table" />
				</section>
			</div>
      <figure>
        <img
          src={HeroImage}
          alt="Restaurant food"
          width={364}
          height={434}
          className={"hero-img"}
        />
      </figure>
    </article>
  );
};

export default Hero;
