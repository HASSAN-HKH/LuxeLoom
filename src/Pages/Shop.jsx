import React from "react";
import Landing from "../Components/Landing/Landing";
import { Popular } from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import New_Collection from "../Components/New_Collection/New_Collection";
import Newsletter from "../Components/Newsletter/Newsletter";

const Shop = () => {
  return (
    <>
      <Landing />
      <div className="container">
        <Popular />
        <Offers />
        <New_Collection />
        <Newsletter />
      </div>
    </>
  );
};

export default Shop;
