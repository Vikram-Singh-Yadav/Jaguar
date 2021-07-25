import React from "react";
import SearchIcon from "@material-ui/icons/Search";
//import logo from "../images";
import { FaCartPlus } from "react-icons/fa";
//import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStatevalue } from "./StateProvider";
import { auth } from "./firebase";

export const Header = () => {
  const [{ basket, user }] = useStatevalue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src="jaguar-logo.jpg" alt="Jaguar logo" />
      </Link>
      <div className="header_search">
        <input
          type="text"
          className="header_searchInput"
          placeholder="Search"
        />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_option" onClick={handleAuth}>
            <span className="header_optionLineone">
              Hello,
              {user ? user.email : "guest"}
            </span>
            <span className="header_optionLinetwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineone ">return</span>
          <span className="header_optionLinetwo">& orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineone">your</span>
          <span className="header_optionLinetwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <FaCartPlus className="cart" />
            <span className="header_optionLinetwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
