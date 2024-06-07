import "./productList.css";
import Product from "../product/Product";
import { useState } from "react";
import { products } from "../../data.js";
import Modal from "../modal/Modal";

const ProductList = () => {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const handleModalOpen = (index) => {
    setOpenModalIndex(index);
  };

  const handleCloseModal = () => {
    setOpenModalIndex(null);
  };

  return (
    <div className="pl">
      {products.slice(1).map((item, index) => (
        <Modal
          key={item.id}
          imgs={item.imgs}
          link={item.link}
          title={item.title}
          modalDescs={item.desc}
          isOpen={openModalIndex === index}
          setIsModalOpen={handleCloseModal}
        ></Modal>
      ))}
      <div className="pl-texts">
        <h1 className="pl-title">Project List</h1>
      </div>
      <div className="pl-list">
        {products.slice(1).map((item, index) => (
          <Product
            key={item.id}
            imgs={item.imgs}
            link={item.link}
            title={item.title}
            onModalOpen={() => handleModalOpen(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
