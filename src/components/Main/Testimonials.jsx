import React from "react";
import "./Testimonials.css";
import person1 from "../../assets/person 1.png";
import person2 from "../../assets/person 2.png";
import person3 from "../../assets/person 3.png";
import person4 from "../../assets/person 4.png";

function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sophia",
      rating: "★★★★★",
      text: "Little Lemon is my favorite spot! The food is always fresh and flavorful.",
      img: person1,
    },
    {
      id: 2,
      name: "James",
      rating: "★★★★☆",
      text: "Great Mediterranean dishes, especially the Greek salad. Highly recommend!",
      img: person2,
    },
    {
      id: 3,
      name: "Ava",
      rating: "★★★★★",
      text: "The lemon dessert is absolutely delicious. Service is also top-notch.",
      img: person3,
    },
    {
      id: 4,
      name: "Liam",
      rating: "★★★★★",
      text: "Wonderful ambiance and excellent food. I’ll definitely come back soon.",
      img: person4,
    },
  ];

  return (
    <section className="testimonials" aria-label="Customer Testimonials">
      <header>
        <h2 className="testimonials-title">What Our Customers Say</h2>
      </header>

      <div className="testimonials-grid">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="testimonial-card"
            aria-label={`Review by ${review.name}`}
          >
            <div className="testimonial-rating" aria-label={`Rating: ${review.rating}`}>
              {review.rating}
            </div>
            <figure>
              <img
                src={review.img}
                alt={`Photo of ${review.name}`}
                className="testimonial-img"
              />
              <figcaption className="sr-only">{review.name}</figcaption>
            </figure>
            <h3 className="testimonial-name">{review.name}</h3>
            <p className="testimonial-text">{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
