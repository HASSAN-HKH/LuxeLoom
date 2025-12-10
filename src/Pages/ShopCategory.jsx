import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProductsByCategory } from "../Store/CategoryStore/CategoryStore";
import "./ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import { Item } from "../Components/Item/Item";

const ShopCategory = ({ category, banner }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Category.categoryProducts);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(filterProductsByCategory(category));
  }, [category]);

  useEffect(() => {
    fetch("https://69134aa2f34a2ff1170b6fc4.mockapi.io/api/p1/Products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div className="container">
      <div className="banner">
        <img src={banner} alt="Banner" />
      </div>
      <div className="shopSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <button>
          Sort by <img src={dropdown_icon} alt="" />
        </button>
      </div>
      <div className="categoryProducts">
        {products.map((item) => {
          return <Item {...item} key={item.id} />;
        })}
      </div>
      <div className="explore">
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default ShopCategory;
