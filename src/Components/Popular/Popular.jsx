import React, { useEffect, useState } from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import { Item } from "../Item/Item";

export const Popular = () => {
  return (
    <div className="popular">
      <div className="head">
        <h2>Popular in women</h2>
        <hr />
      </div>
      <div className="items">
        {data_product.map((item) => {
          return <Item {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
