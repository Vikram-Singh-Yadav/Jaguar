import React from "react";
import { useStatevalue } from "./StateProvider";
import "./SingleProduct.css";
export const SingleProduct = ({ id, title, price, image, rating }) => {
  const [state, dispatch] = useStatevalue();
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
    <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container">
          <img src={image} alt="Product" className="card-img-top" />
          <button onClick={addToCart}>Add to Cart</button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </div>
  );
};
