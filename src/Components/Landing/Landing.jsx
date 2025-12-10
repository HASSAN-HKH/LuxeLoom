import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <section className="left">
          <h3>New Arrivals Only</h3>
          <p>
            new <img src={hand_icon} alt="Icon" /> collections for everyone
          </p>
          <Link to={"/women"}>
            <button>
              Explore Collections <img src={arrow} alt="Icon" />
            </button>
          </Link>
        </section>
        <section className="right">
          <img src={hero_image} alt="Image" />
        </section>
      </div>
    </div>
  );
};

export default Landing;
