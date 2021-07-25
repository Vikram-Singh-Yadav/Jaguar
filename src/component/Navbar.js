import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
//import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
//import logo from "../images";
//import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStatevalue } from "./StateProvider";
import { auth } from "./firebase";

export const Navbar = () => {
  const [{ basket, user }] = useStatevalue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav clas>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src="" alt="Vikram" />
          </Link>
          <button>
            <FaBars />
          </button>
          <div className="header_search">
            <input
              type="text"
              className="header_searchInput"
              placeholder="Search"
            />
            <SearchIcon className="header_searchIcon" />
          </div>
          <div className="links-container">
            <ul className="links">
              <li>
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
              </li>
              <li>
                <div className="header_option">
                  <span className="header_optionLineone ">return</span>
                  <span className="header_optionLinetwo">& orders</span>
                </div>
              </li>
              <li>
                <div className="header_option">
                  <span className="header_optionLineone">your</span>
                  <span className="header_optionLinetwo">Prime</span>
                </div>
              </li>
              <li>
                <Link to="/checkout">
                  <div className="header_optionBasket">
                    <FaCartPlus className="cart" />
                    <span className="header_optionLinetwo header_basketCount">
                      {basket?.length}
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
