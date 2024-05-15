// Product.js
import React from "react";
import "./product.css";

const Product = ({ img, desc, openModal }) => {
  return (
    <div className="p-content">
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <img src={img} alt="" className="p-img" onClick={openModal} />
      </div>
      <div className="p-texts">
        {desc}
      </div>
    </div>
  );
};

export default Product;
