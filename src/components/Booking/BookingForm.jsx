import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fetchAPI } from "../../utils/api";
import "./BookingForm.css";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const initialValues = {
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  };

  const validationSchema = Yup.object({
    date: Yup.string().required("Please select a date"),
    time: Yup.string().required("Please select a time"),
    guests: Yup.number()
      .required("Number of guests is required")
      .min(1, "Minimum 1 guest")
      .max(10, "Maximum 10 guests"),
    occasion: Yup.string().required("Please select an occasion"),
  });

  const handleDateChange = async (e, setFieldValue) => {
    const newDate = e.target.value;
    setFieldValue("date", newDate);

    const times = await fetchAPI(new Date(newDate));
    dispatch({ type: "SET", times });
  };

  return (
    <section aria-label="Booking Form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => submitForm(values)}
      >
        {({ isValid, setFieldValue }) => (
          <Form className="booking-form">
            <label htmlFor="date">Choose date</label>
            <Field
              type="date"
              id="date"
              name="date"
              aria-required="true"
              onChange={(e) => handleDateChange(e, setFieldValue)}
            />
            <ErrorMessage
              name="date"
              component="div"
              className="error-message"
            />

            <label htmlFor="time">Choose time</label>
            <Field
              as="select"
              id="time"
              name="time"
              aria-required="true"
            >
              <option value="">-- Select a time --</option>
              {availableTimes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="time"
              component="div"
              className="error-message"
            />

            <label htmlFor="guests">Number of guests</label>
            <Field
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              aria-required="true"
            />
            <ErrorMessage
              name="guests"
              component="div"
              className="error-message"
            />

            <label htmlFor="occasion">Occasion</label>
            <Field
              as="select"
              id="occasion"
              name="occasion"
              aria-required="true"
            >
              <option value="">-- Select an occasion --</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </Field>
            <ErrorMessage
              name="occasion"
              component="div"
              className="error-message"
            />

            <button
              type="submit"
              className="submit-btn"
              aria-label="On Click"
              disabled={!isValid}
            >
              Make Your Reservation
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default BookingForm;
