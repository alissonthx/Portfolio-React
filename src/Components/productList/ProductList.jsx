import "./productList.css";
import Product from "../product/Product";
import Github from "../../Assets/img/github.png";
import { ThemeContext } from "../../context";
import { useContext, useRef, useState } from "react";
import { products } from '../../data.js';

const ProductList = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Project List</h1>
                <p className="pl-desc">
                    Here you can check my projects, all projects are open source, feel free to check on my GitHub profile:
                </p>
                <a className="pl-link" style={{ backgroundColor: darkMode && "rgb(14, 15, 16)", color: darkMode && "#fff" }} href="https://github.com/alissonthx">
                    <img src={Github} alt="github icon" className="pl-icon" />
                    alissonthx
                </a>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} desc={item.desc} />
                ))}
            </div>
        </div>
    );
}

export default ProductList