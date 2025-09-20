import { Link } from "react-router-dom";
import "./ConfirmedBooking.css";

function ConfirmedBooking() {
  return (
    <section className="confirmed-booking">
      <div className="confirmed-card">
        <h1>Booking Confirmed 🎉</h1>
        <p>Your reservation has been successfully submitted.</p>
        <p className="highlight">We look forward to serving you at Little Lemon!</p>

        <Link to="/" className="home-btn">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
