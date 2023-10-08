import React from "react";
import Hero from "../components/hero/hero.component";
import About from "../components/about/about.component";
import Testimonial from "../components/testimonial/testimonial.component";
import Contact from "../components/contact/contact.component";
import Footer from "../components/footer/footer.component";
import { ReactComponent as Logo } from "../assets/logo.svg";
import background from "../assets/mapmark.svg";

const HomePage = () => {
  return (
    <div id="homepage">
      <Logo id="homelogo" fill="#162A3B" />
      <a href="oluchukwuokpala1759@gmail.com" className="heroEmail">
      oluchukwuokpala1759@gmail.com
      </a>
        <Hero />
        <hr />
        <About />
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "repeat-y"
          }}
        >
          {/* <Projects /> */}
          <Testimonial />
          <Contact />
        </div>
      <Footer />
    </div>
  );
};

export default HomePage;
