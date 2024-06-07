import React from "react";
import "./modal.css";
import Github from "../../Assets/img/github.png";
import { ThemeContext } from "../../context";
import { useContext} from "react";

const Modal = ({ title, link, modalDescs, imgs, isOpen, setIsModalOpen }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

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
              {modalDescs?.map((modalDesc, index) => (
                <React.Fragment key={index}>
                  <p className="m-desc">{modalDesc}</p>
                </React.Fragment>
              ))}
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
