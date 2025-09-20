import React from "react";
import BookingForm from "./BookingForm";
import "./BookingPage.css"; // Import the new CSS

function BookingPage() {
  return (
    <main className="booking-page">
      <h1 className="booking-title">Reserve a Table</h1>

      <p className="booking-subtitle">
        Plan your special night at Little Lemon. Fill out the form below to book
        your table in advance. We look forward to hosting you!
      </p>

      <BookingForm />

      <p className="booking-note">
        For group reservations or private events, please contact us directly.
      </p>
    </main>
  );
}

export default BookingPage;
