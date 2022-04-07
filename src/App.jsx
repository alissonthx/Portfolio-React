import { useContext } from "react";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Intro from "./Components/intro/Intro";
import ProductList from "./Components/productList/ProductList";
import Toogle from "./Components/toogle/Toogle";
import { ThemeContext } from "./context";

const App  = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return <div style={{backgroundColor: darkMode ? "rgb(14, 15, 16)" : "white", color: darkMode && "white",}}>
    <Toogle />
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
    </div>;  
};

export default App;
