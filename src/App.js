import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./AuthContext";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Wellness from "./pages/Wellness";
import PBPavilion from "./pages/PBPavilion";
import Booking from "./pages/Booking";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Points from "./pages/Points";

// *** Import your new form components ***
import WellnessReservationForm from "./components/WellnessReservationForm";
import PBPavilionReservationForm from "./components/PBPavilionReservationForm";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rooms" element={<Rooms />} />
                    <Route path="/wellness" element={<Wellness />} />
                    <Route path="/pbpavilion" element={<PBPavilion />} />
                    <Route path="/booking" element={<Booking />} />
                    {/* New reservation form routes */}
                    <Route path="/reserve-wellness" element={<WellnessReservationForm />} />
                    <Route path="/reserve-pavilion" element={<PBPavilionReservationForm />} />
                    {/* Allow both hyphen and no-hyphen for sign in/up */}
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/points" element={<Points />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
