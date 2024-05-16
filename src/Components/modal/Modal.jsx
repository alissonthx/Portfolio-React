import "./modal.css";

const Modal = ({ title, link, modalDesc, imgs, isOpen, setIsModalOpen }) => {
  return (
    <div>
      {isOpen ? (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={setIsModalOpen}>
              &times;
            </span>
            <div className="m-left">
              <h2 className="m-title">{title}</h2>
              <p className="m-desc">{modalDesc}</p>
              <a className="m-link" href={link}>
                More Information
              </a>
            </div>
            <div className="m-right m-screenshots">
              {imgs?.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`Game Screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
