import React from "react";
import "./Specials.css";
import greekSalad from "../../assets/greek salad.jpg";
import bruschetta from "../../assets/bruschetta.svg";
import lemonDessert from "../../assets/lemon dessert.jpg";

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2 className="specials-title">Specials</h2>
        <button className="specials-cta">Online Menu</button>
      </div>

      <div className="specials-grid">
        <div className="special-card">
          <img src={greekSalad} alt="Greek Salad" className="special-img" />
          <div className="special-card-header">
            <h3 className="special-card-title">Greek Salad</h3>
            <span className="special-card-price">$12.99</span>
          </div>
          <p className="special-card-desc">
            Crisp lettuce, peppers, olives, and feta cheese, served with warm pita.
          </p>
          <button className="special-card-cta">Order Delivery</button>
        </div>

        <div className="special-card">
          <img src={bruschetta} alt="Bruschetta" className="special-img" />
          <div className="special-card-header">
            <h3 className="special-card-title">Bruschetta</h3>
            <span className="special-card-price">$9.99</span>
          </div>
          <p className="special-card-desc">
            Grilled bread rubbed with garlic, topped with olive oil, salt, and fresh tomatoes.
          </p>
          <button className="special-card-cta">Order Delivery</button>
        </div>

        <div className="special-card">
          <img src={lemonDessert} alt="Lemon Dessert" className="special-img" />
          <div className="special-card-header">
            <h3 className="special-card-title">Lemon Dessert</h3>
            <span className="special-card-price">$7.99</span>
          </div>
          <p className="special-card-desc">
            A refreshing lemon tart with a buttery crust and light whipped cream.
          </p>
          <button className="special-card-cta">Order Delivery</button>
        </div>
      </div>
    </section>
  );
}

export default Specials;
