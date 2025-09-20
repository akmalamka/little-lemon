import React from "react";
import "./AboutHero.css";
import foodImg from "../../assets/restaurantfood.jpg";
import chefImg from "../../assets/restaurant chef B.jpg";

function AboutHero() {
  return (
    <section className="about-hero" aria-label="About Little Lemon Section">
      <div className="about-hero-content">
        <header>
          <h1 className="about-hero-title">About Little Lemon</h1>
          <h2 className="about-hero-subtitle">A Taste of the Mediterranean</h2>
        </header>
        <p className="about-hero-text">
          Nestled in the heart of the city, Little Lemon blends traditional
          Mediterranean flavors with a modern twist. Our passion for fresh
          ingredients, family-inspired recipes, and warm hospitality makes every
          visit a memorable dining experience. Whether you're here for a casual
          meal or a special occasion, our cozy ambiance and flavorful dishes
          will make you feel right at home.
        </p>
      </div>

      <figure className="about-hero-images">
        <img
          src={foodImg}
          alt="Mediterranean dishes"
          className="img-primary"
        />
        <figcaption className="sr-only">Assorted Mediterranean dishes</figcaption>

        <img
          src={chefImg}
          alt="Little Lemon chef"
          className="img-secondary"
        />
        <figcaption className="sr-only">Our chef at Little Lemon</figcaption>
      </figure>
    </section>
  );
}

export default AboutHero;
