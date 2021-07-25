import React from "react";
import { Subtotal } from "./Subtotal";
import "./Checkout.css";
import { useStatevalue } from "./StateProvider";
import { CheckoutProduct } from "./CheckoutProduct";
export const Checkout = () => {
  const [{ basket, user }] = useStatevalue();
  const basketItem = console.log(basket);
  return (
    <div className="checkout">
      <div className=" checkout__left ">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-hnlYYvfP4H1PBMDiTQAlns6HnCjNnsuH6g&usqp=CAU"
          //src="data:image/jpeg;base64,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"
          alt="banner"
        />
        <div>
          <h3>Hello,{user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {/* Basket Item */}
          {basket.map((item) => {
            return (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};
