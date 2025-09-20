import { Link } from "react-router-dom";
import "./ConfirmedBooking.css";

function ConfirmedBooking() {
  return (
    <main aria-label="Booking Confirmation Page">
      <section className="confirmed-booking" aria-label="Booking Confirmation">
        <div className="confirmed-card">
          <h1>Booking Confirmed 🎉</h1>
          <p>Your reservation has been successfully submitted.</p>
          <p className="highlight">We look forward to serving you at Little Lemon!</p>

          <Link
            to="/"
            className="home-btn"
            aria-label="On Click"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ConfirmedBooking;
