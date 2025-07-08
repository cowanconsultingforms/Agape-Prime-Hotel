import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SignUp from "./pages/SignUp";
import Booking from "./pages/BookingTemp"; // ✅ Correct casing
import PBPavilion from "./pages/PBPavilion"; 
import Wellness from "./pages/Wellness"; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/sign-up" element={<SignUp />} /> 
        <Route path="/booking" element={<Booking />} /> {/* ✅Booking Route*/}
         <Route path="/pbpavilion" element={<PBPavilion />} />  {/* ✅ PB Pavilion route */}
        <Route path="/wellness" element={<Wellness />} />       {/* ✅ Wellness route */}
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
