import React from "react";
import "../css/SignUp.css";
import user_icon from '../assets/images/person.png';
import email_icon from '../assets/images/email.png';
import password_icon from '../assets/images/password.png';

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      
      <div className="inputs">
        
        <div className="input">
            <img src={user_icon}/>
            <input type="text" placeholder="Name"/>
        </div>
          
          <div className="input">
            <img src={email_icon}/>
            <input type="email" placeholder="Email"/>
          </div>
          
          <div className="input">
            <img src={password_icon}/>
            <input type="password" placeholder="Password" />
          </div>
        </div>

        <div className="forgot-password">Lost Password? <span>Click Here</span> </div>
          <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
            </div> 

          
         
           

     
    </div>
  );
};

export default LoginSignup;
