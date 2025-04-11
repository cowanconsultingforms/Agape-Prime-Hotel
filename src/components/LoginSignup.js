import React from "react";
import "../css/SignUp.css";
import user_icon from '../assets/images/person.png';
import email_icon from '../assets/images/email.png';
import password_icon from '../assets/images/password.png';

const LoginSignup = ({ action, setAction, formData, onChange, onSubmit }) => {
  return (
    <form className="container" onSubmit={onSubmit}>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt="User" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={onChange}
              required={action === "Sign Up"}
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="Email" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
          />
        </div>

        <div className="input">
          <img src={password_icon} alt="Password" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={onChange}
            required
          />
        </div>
      </div>

      <div className="forgot-password">
        Lost Password? <span>Click Here</span>
      </div>

      <div className="submit-container">
        <button
          type="submit"
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </button>

        <button
          type="submit"
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginSignup;
