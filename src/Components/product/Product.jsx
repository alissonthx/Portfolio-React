import "./product.css";

const Product = ({ img, desc, setIsModalOpen, onModalOpen }) => {
  return (
    <div className="p-content">
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        {setIsModalOpen && (
          <img
            src={img}
            alt=""
            className="p-img"
            onClick={() => setIsModalOpen(true)}
          />
        )}
        {!setIsModalOpen && (
          <img src={img} alt="" className="p-img" onClick={onModalOpen} />
        )}
      </div>
      {desc ? <div className="p-texts">{desc}</div> : null}
    </div>
  );
};

export default Product;
