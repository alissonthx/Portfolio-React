import "./carousel.css";
import { useRef } from "react";
import Previous from "../../Assets/img/previous.svg";
import Next from "../../Assets/img/next.svg";
import Award from "../../Assets/img/award.jpg";
import { awards } from "../../data";

const Carousel = () => {
    const carousel = useRef(null);
    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
    return (
        <div className="a-award" ref={carousel} >
            {/* {awards.map((item) => (
                <Award key={item.id} img={item.img} link={item.link} />
            ))} */}
            {/* <img src={Previous} alt="scroll left" onClick={handleRightClick} className="a-award-svg" />
            <img src={Award} alt="" className="a-award-img" /> */}
            <div className="a-award-texts">
                <h4 className="a-award-title">JavaScript ES6 essencial </h4>
                <p className="a-award-desc">
                    JavaScript ES6 essencial, is a free online course for beginners learn
                    JavaScript basics for web.
                </p>
            </div>
            <img src={Next} alt="scroll right" onClick={handleLeftClick} className="a-award-svg" />
        </div>
    );
};

export default Carousel;
