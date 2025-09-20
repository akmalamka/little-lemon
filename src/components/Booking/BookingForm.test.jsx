/* eslint-disable no-undef */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm Component", () => {
  const mockDispatch = vi.fn();
  const mockSubmitForm = vi.fn();

  const setup = () =>
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

  test("renders Booking Form section", () => {
    setup();
    const section = screen.getByLabelText("Booking Form");
    expect(section).toBeInTheDocument();
  });

  test("renders all form labels", () => {
    setup();
    expect(screen.getByLabelText("Choose date")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
  });

  test("date input has required attribute", () => {
    setup();
    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toHaveAttribute("aria-required", "true");
    expect(dateInput).toHaveAttribute("type", "date");
  });

  test("guests input enforces min and max", () => {
    setup();
    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("type", "number");
  });

  test("shows error when submitting empty form", async () => {
    setup();
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    fireEvent.click(submitButton);

    expect(await screen.findByText("Please select a date")).toBeInTheDocument();
    expect(await screen.findByText("Please select a time")).toBeInTheDocument();
    expect(await screen.findByText("Please select an occasion")).toBeInTheDocument();
  });

 test("accepts valid input and calls submitForm", async () => {
  const mockSubmit = vi.fn();

  render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} submitForm={mockSubmit} />);

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2025-12-25" },
  });
  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "17:00" },
  });
  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "4" },
  });
  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Birthday" },
  });

  const submitButton = screen.getByRole("button", { name: /make your reservation/i });

  await waitFor(() => expect(submitButton).toBeEnabled());

  fireEvent.click(submitButton);

  await waitFor(() =>
    expect(mockSubmit).toHaveBeenCalledWith({
      date: "2025-12-25",
      time: "17:00",
      guests: 4,
      occasion: "Birthday",
    })
  );
});
});
