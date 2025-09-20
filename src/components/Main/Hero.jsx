import React from "react";
import "./Hero.css";
import restaurant from "../../assets/restaurant.jpg";

function Hero() {
  return (
    <section className="hero" aria-label="Hero Section">
      <div className="hero-content">
        <div className="hero-left">
          <header>
            <h1 className="hero-title">Welcome to Little Lemon</h1>
            <h2 className="hero-subtitle">Authentic Mediterranean Cuisine</h2>
          </header>

          <p className="hero-description">
            Experience fresh, flavorful dishes crafted with love. Whether it’s a
            family dinner or a casual night out, we bring sunshine to every plate.
          </p>

          <button
            className="hero-cta"
            aria-label="On Click"
          >
            Reserve a Table
          </button>
        </div>

        <figure className="hero-right">
          <img
            src={restaurant}
            alt="Little Lemon Restaurant"
            className="hero-image"
          />
          <figcaption className="sr-only">Exterior of Little Lemon Restaurant</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
