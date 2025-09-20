import React from "react";
import BookingForm from "./BookingForm";
import "./BookingPage.css";

function BookingPage({ availableTimes, dispatch }) {
  return (
    <main className="booking-page">
      <h1 className="booking-title">Reserve a Table</h1>

      <p className="booking-subtitle">
        Plan your special night at Little Lemon. Fill out the form below to book
        your table in advance. We look forward to hosting you!
      </p>

      {/* ✅ Pass props into BookingForm */}
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />

      <p className="booking-note">
        For group reservations or private events, please contact us directly.
      </p>
    </main>
  );
}

export default BookingPage;
