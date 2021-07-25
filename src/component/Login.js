import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="jaguar-logo.jpg" alt="jaguar logo" />
      </Link>
      <div className="login__container">
        <h1>Sign In </h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
          <p>
            By signing-in you agree to JAGUAR terms and conditions of Use &
            Sale.Please see our privacy policy
          </p>
          <button className="login__registerButton" onClick={register}>
            Create your Jaguar Account
          </button>
        </form>
      </div>
    </div>
  );
};
