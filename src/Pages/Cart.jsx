import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { removeItem } from "../Store/CartStore/CartStore";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../Store/CartStore/CartStore";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const products = useSelector((state) => state.Cart.items);
  const itemsNumber = products.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const itemsPrice = products.reduce((acc, item) => {
    return acc + item.quantity * item.new_price;
  }, 0);
  const dispatch = useDispatch();

  const [ship, setShip] = useState("");

  console.log(ship);

  return (
    <div className="container container-cart">
      <section
        className="h-100 h-custom"
        style={{ backgroundColor: "#eec2dd8c" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    {/* Left side */}
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0">Shopping Cart</h1>
                          <h6 className="mb-0 text-muted">
                            {itemsNumber} items
                          </h6>
                        </div>
                        <hr className="my-4" />

                        {/* Example item */}

                        {products.map((item) => {
                          return (
                            <div
                              className="row mb-4 d-flex justify-content-between align-items-center"
                              key={item.id}
                            >
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src={item.image}
                                  className="img-fluid rounded-3"
                                  alt="Cotton T-shirt"
                                />
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted">{item.name}</h6>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button
                                  className="btn btn-link px-2"
                                  onClick={() =>
                                    dispatch(decreaseQuantity(item))
                                  }
                                >
                                  <i className="fas fa-minus"></i>
                                </button>

                                <input
                                  name="quantity"
                                  value={item.quantity}
                                  className="form-control form-control-sm"
                                />

                                <button
                                  className="btn btn-link px-2"
                                  onClick={() =>
                                    dispatch(increaseQuantity(item))
                                  }
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="mb-0">
                                  {item.new_price * item.quantity}$
                                </h6>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a
                                  href="#!"
                                  className="text-muted"
                                  onClick={() => dispatch(removeItem(item))}
                                >
                                  <i className="fas fa-times"></i>
                                </a>
                              </div>
                            </div>
                          );
                        })}

                        <hr className="my-4" />

                        <div className="pt-5">
                          <h6 className="mb-0">
                            <Link to={"/shop"} className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2"></i>
                              Back to shop
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>

                    {/* Right side (Summary) */}
                    <div className="col-lg-4 bg-body-tertiary">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">
                            items {itemsNumber}
                          </h5>
                          <h5>{itemsPrice}$</h5>
                        </div>

                        <h5 className="text-uppercase mb-3">Shipping</h5>
                        <div className="mb-4 pb-2">
                          <select
                            className="form-select"
                            onChange={(e) => setShip(e.target.value)}
                          >
                            <option>Standard-Delivery - 5.00$</option>
                            <option>Express - 10.00$</option>
                          </select>
                        </div>

                        <h5 className="text-uppercase mb-3">Promo code</h5>
                        <div className="mb-5">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Examplea2"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Examplea2"
                            >
                              Enter your code
                            </label>
                          </div>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>
                            {itemsPrice +
                              parseFloat(ship.replace(/[^\d.]/g, "")) ||
                              itemsPrice}
                            $
                          </h5>
                        </div>

                        <button
                          type="button"
                          className="btn btn-dark btn-block btn-lg check"
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
