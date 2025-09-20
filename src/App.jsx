import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main/Main";
import BookingPage from "./components/Booking/BookingPage"; // ✅ you'll create this page

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Main />} />
        {/* Reservations page */}
        <Route path="/reservations" element={<BookingPage />} />

        {/* You can add About, Menu, etc. later */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
