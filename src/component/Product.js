import React from "react";
import "./Product.css";
import { useStatevalue } from "./StateProvider";

export const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStatevalue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small className="dollar">$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
};
