import { useState, lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "../src/Components/Assets/banner_mens.png";
import women_banner from "../src/Components/Assets/banner_women.png";
import kid_banner from "../src/Components/Assets/banner_kids.png";

const Cart = lazy(() => import("./Pages/Cart"));
const Shop = lazy(() => import("./Pages/Shop"));
const ShopCategory = lazy(() => import("./Pages/ShopCategory"));
const Product = lazy(() => import("./Pages/Product"));
// import Shop from "../src/Pages/Shop";
// import ShopCategory from "./Pages/ShopCategory";
// import Product from "./Pages/Product";

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route
              path="/men"
              element={<ShopCategory category="men" banner={men_banner} />}
            />
            <Route
              path="/women"
              element={<ShopCategory category="women" banner={women_banner} />}
            />
            <Route
              path="/kids"
              element={<ShopCategory category="kid" banner={kid_banner} />}
            />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
