import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import star_icon from "../Components/Assets/star_icon.png";
import star_dull_icon from "../Components/Assets/star_dull_icon.png";
import "./Product.css";
import breadcrum_arrow from "../Components/Assets/breadcrum_arrow.png";
import { Item } from "../Components/Item/Item";
import { addItem } from "../Store/CartStore/CartStore";

const Product = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.Category.products);
  const product = products.find((item) => item.id == productId);
  const [active, setActive] = useState("desc");

  const dispatch = useDispatch();

  return (
    <div className="container container-product">
      <p>
        Home <img src={breadcrum_arrow} alt="Image" /> Shop{" "}
        <img src={breadcrum_arrow} alt="Image" /> {product.category}{" "}
        <img src={breadcrum_arrow} alt="Image" /> {product.name}
      </p>
      <div className="product">
        <div className="product-display">
          <div className="product-images">
            <img src={product.image} alt="Image" />
            <img src={product.image} alt="Image" />
            <img src={product.image} alt="Image" />
            <img src={product.image} alt="Image" />
          </div>
          <div className="main-img">
            <img src={product.image} alt="Image" />
          </div>
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="productstars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="prices">
            <p className="old">{product.old_price}$</p>
            <p className="new">{product.new_price}$</p>
          </div>
          <div className="product-description">
            <p>
              A lightweight, usually knitted, pullover shirt, close-fitting and
              with a round neckline and short sleeves, worn as an undershirt or
              outer garment.
            </p>
          </div>
          <div className="product-sizes">
            <h3>Select Size</h3>
            <ul>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
              <li>XXL</li>
            </ul>
          </div>
          <button onClick={() => dispatch(addItem(product))}>
            Add to cart
          </button>
          <p className="tags">
            <span>Tags</span>: Modern, Latest
          </p>
        </div>
      </div>
      <div className="product-description">
        <div className="heading">
          <div
            className={`desc ${active === "desc" ? "active" : ""}`}
            onClick={() => setActive("desc")}
          >
            Description
          </div>
          <div
            className={`rev ${active === "rev" ? "active" : ""}`}
            onClick={() => setActive("rev")}
          >
            Review(122)
          </div>
        </div>
        <div className="description">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g. sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      <div className="related">
        <div className="head">
          <h2>Related Products</h2>
          <hr />
        </div>
        <div className="items">
          {products
            .filter(
              (item) =>
                item.category === product.category && item.id !== product.id
            )
            .slice(0, 4)
            .map((item) => {
              return <Item {...item} key={item.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Product;
