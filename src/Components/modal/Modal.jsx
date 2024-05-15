import "./modal.css";

const Modal = ({ title, desc, screenshots, isOpen, setIsModalOpen }) => {
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
              <p className="m-desc">{desc}</p>
            </div>
            <div className="m-right m-screenshots">
              {screenshots?.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
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
