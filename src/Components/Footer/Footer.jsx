import React from "react";
import "./Footer.css";
import logo_big from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="head">
          <img src={logo_big} alt="Logo" />
          <span>LuxeLoom</span>
        </div>
        <nav>
          <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="social">
          <img src={instagram_icon} alt="Icon" />
          <img src={whatsapp_icon} alt="Icon" />
          <img src={pintester_icon} alt="Icon" />
        </div>
        <hr />
        <p>Copyright @ 2025 - All Right Reserved to HKH</p>
      </div>
    </div>
  );
};

export default Footer;
