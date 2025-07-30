import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { toast } from "react-toastify";
import "../css/Auth.css";

const INTER_FONT = "'Inter', Arial, Helvetica, sans-serif";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Signed up with Google!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="auth-container" style={{ fontFamily: INTER_FONT }}>
      <video className="background-video" autoPlay loop muted>
        <source src="/videos/sunsetbluedark.mp4" type="video/mp4" />
      </video>

      <form className="auth-form" onSubmit={handleSubmit} style={{ fontFamily: INTER_FONT }}>
        <h2 style={{ fontFamily: INTER_FONT, fontWeight: 700 }}>Sign Up</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          style={{ fontFamily: INTER_FONT }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ fontFamily: INTER_FONT }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ fontFamily: INTER_FONT }}
        />

        <button
          type="submit"
          disabled={loading}
          className={loading ? "loading" : ""}
          style={{ fontFamily: INTER_FONT, fontWeight: 700 }}
        >
          {loading ? "Creating..." : "Create Account"}
        </button>

        <button
          type="button"
          className={`google-btn ${loading ? "loading" : ""}`}
          onClick={handleGoogleSignUp}
          disabled={loading}
          style={{ fontFamily: INTER_FONT, fontWeight: 700 }}
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" />
          {loading ? "Please wait..." : "Sign up with Google"}
        </button>

        <p className="switch-link" style={{ fontFamily: INTER_FONT }}>
          Already signed up?{" "}
          <span onClick={() => navigate("/sign-in")} style={{ cursor: 'pointer', fontFamily: INTER_FONT, textDecoration: "underline" }}>Sign In</span>
        </p>
      </form>
    </div>
  );
}
