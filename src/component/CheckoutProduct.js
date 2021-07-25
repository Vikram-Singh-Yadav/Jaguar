import React from "react";
import "./CheckoutProduct.css";
import { useStatevalue } from "./StateProvider";

export const CheckoutProduct = ({
  id,
  title,
  price,
  image,
  rating,
  hideButton,
}) => {
  const [{ basket }, dispatch] = useStatevalue();
  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small className="dollar">$</small>
          <strong className="price">{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </div>
    </div>
  );
};
