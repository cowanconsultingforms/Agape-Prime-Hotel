import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SignUp from "./pages/SignUp";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />

        <Route path="/sign-up" element={<SignUp />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>


  );
}

<ToastContainer />
export default App;
