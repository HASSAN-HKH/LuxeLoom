import { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const products = useSelector((state) => state.Cart.items);
  const itemsNumber = products.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <div className="container">
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <p className="desc">LuxeLoom</p>
        </div>
        <nav>
          <ul className="menu">
            <li>
              <Link to={"/"}>Shop</Link> {path === "/" && <hr />}
            </li>
            <li>
              <Link to={"/men"}>Men</Link> {path === "/men" && <hr />}
            </li>
            <li>
              <Link to={"/women"}>Women</Link> {path === "/women" && <hr />}
            </li>
            <li>
              <Link to={"/kids"}>Kids</Link> {path === "/kids" && <hr />}
            </li>
          </ul>
        </nav>
        <div className="login-cart">
          <button>
            <Link to={"/login"}>Login</Link>
          </button>
          <div className="cart">
            <Link to={"/cart"}>
              <img src={cart_icon} alt="Cart-Icon" />
            </Link>
            <span className="count">{itemsNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
