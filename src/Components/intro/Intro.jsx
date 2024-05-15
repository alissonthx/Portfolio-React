import React, { useState } from "react";
import "./intro.css";
import Product from "../product/Product";
import Modal from "../modal/Modal";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import { products } from "../../data.js";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const handleModalOpen = (index) => {
    setOpenModalIndex(index);
  };

  const handleCloseModal = () => {
    setOpenModalIndex(null);
  };

  return (
    <div className="i">
      {products.map((item, index) => (
        <Modal
          key={item.id}
          imgs={item.imgs}
          link={item.link}
          title={item.title}
          modalDesc={item.desc}
          isOpen={openModalIndex === index}
          setIsModalOpen={handleCloseModal}
        ></Modal>
      ))}
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name">Álisson</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Gameplay Programmer</div>
              <div className="i-title-item">Graphics Programmer</div>
              <div className="i-title-item">Game Developer</div>
              <div className="i-title-item">GameDev Content Creator</div>
            </div>
          </div>
          <p className="i-desc">
            I am a Game developer with a passion for game development and
            technology.
          </p>
        </div>
        <svg
          style={{ stroke: darkMode && "#fff" }}
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="#000"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              strokeWidth="2.9895"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        {/* <div className="i-bg"></div> */}
        <div className="i-right">
          <div className="i-right-wrapper">
            <h1 className="i-name">Highlited</h1>
            <p className="i-right-desc">
              Unity Asset tool: World procedural Generator, still in
              development, more comming soon...
            </p>
            <div className="i-card">
              {products.map((item, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default Intro;
