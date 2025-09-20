import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main/Main";
import BookingPage from "./components/Booking/BookingPage";

// ✅ Initial times
const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// ✅ Reducer for available times
const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      // For now, always return same set
      return initializeTimes();
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
