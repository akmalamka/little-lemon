import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main/Main";
import BookingPage from "./components/Booking/BookingPage";
import ConfirmedBooking from "./components/Booking/ConfirmedBooking";
import { updateTimes, initializeTimes } from "./utils/times";

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  useEffect(() => {
    const loadTimes = async () => {
      const times = await initializeTimes();
      dispatch({ type: "SET", times });
    };
    loadTimes();
  }, []);

  return (
    <Router>
      <Header />
      
      {/* Use main for primary page content */}
      <main aria-label="Primary Content">
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
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
