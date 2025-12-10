import React from "react";
import "./Item.css";
import { useNavigate } from "react-router-dom";

export const Item = (props) => {
  const navigate = useNavigate();

  return (
    <div
      className="item"
      onClick={() => {
        navigate(`/product/${props.id}`);
        window.scrollTo(0, 0);
      }}
    >
      <img src={props.image} alt="Image" />
      <p>{props.name}</p>
      <div className="prices">
        <div className="new">{props.new_price}$</div>
        <div className="old">{props.old_price}$</div>
      </div>
    </div>
  );
};
