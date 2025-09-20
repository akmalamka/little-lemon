import React from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../../utils/api";
import "./BookingPage.css";

function BookingPage({ availableTimes, dispatch }) {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed");
    }
  };

  return (
    <main className="booking-page" aria-label="Booking Page">
      <header>
        <h1 className="booking-title">Reserve a Table</h1>
        <p className="booking-subtitle">
          Plan your special night at Little Lemon. Fill out the form below to book
          your table in advance. We look forward to hosting you!
        </p>
      </header>

      <section aria-label="Booking Form Section">
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </section>

      <footer>
        <p className="booking-note">
          For group reservations or private events, please contact us directly.
        </p>
      </footer>
    </main>
  );
}

export default BookingPage;
