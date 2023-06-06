import Header from "./Header";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

const Main = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Specials />
      <Testimonials />
      <AboutMe />
      <Footer needed={true} classNeeded="footer-pos" />
    </main>
  );
};

export default Main;
