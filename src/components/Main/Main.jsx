import React from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import AboutHero from "./AboutHero";

function Main() {
  return (
    <main style={{ marginTop: "85px" }}>
      <Hero />
      <Specials />
      <Testimonials />
      <AboutHero />
    </main>
  );
}

export default Main;
