import React from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="login-Container">
      <div className="loginSignup">
        <h1>Sign Up</h1>
        <div className="sign-fields">
          <div className="name">
            <input type="text" placeholder="Name" />
          </div>

          <div className="email">
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="password">
            <input type="password" placeholder="Password" />
          </div>

          <div className="continue">
            <button>Continue</button>
          </div>
        </div>
        <p>
          Already have an account? <button>Login here</button>
        </p>
        <div className="agree">
          <input type="checkbox" name="terms" id="checkTerms" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
