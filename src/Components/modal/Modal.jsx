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
              <a
                target="_blank"
                className="m-link"
                href={link}
                rel="noreferrer"
              >
                More Information
              </a>
            </div>
            <div className="m-right m-screenshots">
              {imgs?.slice(1).map((imgUrl, index) => (
                <img
                  key={index + 1} 
                  src={imgUrl}
                  alt={`Game Screenshot ${index + 2}`}
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
