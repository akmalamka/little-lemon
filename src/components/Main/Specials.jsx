import React from "react";
import "./Specials.css";
import greekSalad from "../../assets/greek salad.jpg";
import bruschetta from "../../assets/bruschetta.svg";
import lemonDessert from "../../assets/lemon dessert.jpg";

function Specials() {
  return (
    <section className="specials" aria-label="Specials Section">
      <header className="specials-header">
        <h2 className="specials-title">Specials</h2>
        <button className="specials-cta" aria-label="On Click">
          Online Menu
        </button>
      </header>

      <div className="specials-grid">
        {/* Greek Salad Card */}
        <article className="special-card" aria-label="Greek Salad Special">
          <figure>
            <img src={greekSalad} alt="Greek Salad" className="special-img" />
            <figcaption className="sr-only">Greek Salad</figcaption>
          </figure>
          <div className="special-card-header">
            <h3 className="special-card-title">Greek Salad</h3>
            <span className="special-card-price">$12.99</span>
          </div>
          <p className="special-card-desc">
            Crisp lettuce, peppers, olives, and feta cheese, served with warm pita.
          </p>
          <button className="special-card-cta" aria-label="On Click">
            Order Delivery
          </button>
        </article>

        {/* Bruschetta Card */}
        <article className="special-card" aria-label="Bruschetta Special">
          <figure>
            <img src={bruschetta} alt="Bruschetta" className="special-img" />
            <figcaption className="sr-only">Bruschetta</figcaption>
          </figure>
          <div className="special-card-header">
            <h3 className="special-card-title">Bruschetta</h3>
            <span className="special-card-price">$9.99</span>
          </div>
          <p className="special-card-desc">
            Grilled bread rubbed with garlic, topped with olive oil, salt, and fresh tomatoes.
          </p>
          <button className="special-card-cta" aria-label="On Click">
            Order Delivery
          </button>
        </article>

        {/* Lemon Dessert Card */}
        <article className="special-card" aria-label="Lemon Dessert Special">
          <figure>
            <img src={lemonDessert} alt="Lemon Dessert" className="special-img" />
            <figcaption className="sr-only">Lemon Dessert</figcaption>
          </figure>
          <div className="special-card-header">
            <h3 className="special-card-title">Lemon Dessert</h3>
            <span className="special-card-price">$7.99</span>
          </div>
          <p className="special-card-desc">
            A refreshing lemon tart with a buttery crust and light whipped cream.
          </p>
          <button className="special-card-cta" aria-label="On Click">
            Order Delivery
          </button>
        </article>
      </div>
    </section>
  );
}

export default Specials;
