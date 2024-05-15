import React from "react";
import "./modal.css";

const Modal = ({ closeModal, desc, screenshots }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={closeModal}>&times;</span>
        <div className="modal-text">
          <h2>{desc}</h2>
          <div className="screenshots">
            {screenshots?.map((screenshot, index) => (
              <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;