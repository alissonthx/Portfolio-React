import React from "react";
import "./product.css";

const Product = ({ imgs, title, setIsModalOpen, onModalOpen }) => {
  return (
    <div className="p-content">
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        {imgs?.map((imgUrl, index) => (
          <React.Fragment key={index}>
            {setIsModalOpen ? (
              <img
                src={imgUrl}
                alt=""
                className="p-img"
                onClick={() => setIsModalOpen(true)}
              />
            ) : (
              <img
                src={imgUrl}
                alt=""
                className="p-img"
                onClick={onModalOpen}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      {title ? <div className="p-texts">{title}</div> : null}
    </div>
  );
};

export default Product;
