import React, { useState } from "react";

const LoginSignup = () => {
  const [state, setState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const login = async () => {
    const response = await fetch("http://localhost:5080/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const responseData = await response.json();
    handleResponse(responseData);
  };

  const signup = async () => {
    const response = await fetch("http://localhost:5080/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const responseData = await response.json();
    handleResponse(responseData);
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <form>
          <div className="loginsignup-fields">
            {state === "Sign Up" ? (
              <input
                name="username"
                value={formData.username}
                onChange={changeHandler}
                type="text"
                placeholder="Your Name"
              />
            ) : null}
            <input
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              placeholder="Email Address"
            />
            <input
              name="password"
              value={formData.password}
              onChange={changeHandler}
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            onClick={() => {
              state === "Login" ? login() : signup();
            }}
          >
            Continuer
          </button>
        </form>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            J'ai deja un compte?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Connectez Vous !
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Creer un compte?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click Here
            </span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>En continuant, j'accepte les conditions </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
