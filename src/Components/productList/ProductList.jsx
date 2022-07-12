import "./productList.css";
import Product from "../product/Product";
import { products } from '../../data.js';

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Project List</h1>
                <p className="pl-desc">
                    Here you can check my projects.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    );
}

export default ProductList