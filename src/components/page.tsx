import React from "react";
import { Home } from "./home";
import { About } from "./about";
import { CarousalSlider } from "./carousal";
import { TestimonialSlider } from "./testimonials";

export const MainPage = () => {
  return (
    <>
      <Home />
      <About />
      <CarousalSlider />
      <TestimonialSlider />
    </>
  );
};
