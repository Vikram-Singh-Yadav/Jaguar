import "./App.css";
import React, { useEffect } from "react";
import { Header } from "./component/Header";
//import { Navbar } from "./component/Navbar";
import { Home } from "./component/Home";
import { Checkout } from "./component/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./component/Login";
import { auth } from "./component/firebase";
import { useStatevalue } from "./component/StateProvider";
import { Payment } from "./component/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IYOYOSC4Yv97SqFemKu5DUEObEHPuyTTj5AbVbZe7lLxsmUDFzo2BKlkCnbJ1cRjRDDvAPC1YFbxQHFS8UfnSPz00Ci9I7Dc3"
);
function App() {
  const [{}, dispatch] = useStatevalue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
