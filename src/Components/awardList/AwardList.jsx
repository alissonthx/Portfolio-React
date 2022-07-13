import "./awardList.css";
import { useRef } from "react";
import { awards } from "../../data.js";
import Award from "../award/Award";
import Previous from "../../Assets/img/previous.svg";
import Next from "../../Assets/img/next.svg";

const AwardList = () => {
    const carousel = useRef(null);    

    const handleLeftClick = (e) => {
        e.preventDefault();
        console.log(carousel.current);
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handleRightClick = (e) => {
        e.preventDefault();
        console.log(carousel.current);
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return (
        <div className="a-award">
            <img src={Previous} alt="scroll left" onClick={handleRightClick} className="award-svg" />
            <div className="award-list" ref={carousel}>
                {awards.map((item) => (
                    <Award key={item.id} img={item.img} desc={item.desc} />
                ))}
            </div>
            <img src={Next} alt="scroll right" onClick={handleLeftClick} className="award-svg" />
        </div>
    );
};

export default AwardList;
