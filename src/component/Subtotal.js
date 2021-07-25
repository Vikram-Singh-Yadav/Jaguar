import React from "react";
import "./Subtotal.css";
//import CurrencyFormat from "react-currency-format";
import { useStatevalue } from "./StateProvider";
import { useHistory } from "react-router";
export const Subtotal = () => {
  // console.log(CurrencyFormat);
  const [{ basket }, dispatch] = useStatevalue();
  const history = useHistory();
  let total = 0;
  basket.forEach((item) => {
    total += item.price;
  });
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items) : <strong>${total.toFixed(2)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button onClick={(e) => history.push("/payment")}>
        Proceed To Checkout
      </button>
    </div>
  );
};
