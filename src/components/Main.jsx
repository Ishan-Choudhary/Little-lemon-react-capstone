import Hero from "./Hero";
import Specials from "./Specials";
// import Testimonials from "./Testimonials";
// import AboutMe from "./AboutMe";
import Header from "./Header";

// <Specials />
// <Testimonials />
// <AboutMe />
const Main = () => {
  return (
    <main>
      <Header />
      <Hero />
      <div style={{ height: "550px" }}></div>
      <Specials />
    </main>
  );
};

export default Main;
