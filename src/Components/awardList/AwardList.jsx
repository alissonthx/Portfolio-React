import "./awardList.css";
import { awards } from "../../data.js";
import Award from "../award/Award";
import Previous from "../../Assets/img/previous.svg";
import Next from "../../Assets/img/next.svg";
import { useRef } from "react";

const AwardList = () => {
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
        <div className="a-award">
            <img src={Previous} alt="scroll left" onClick={handleRightClick} className="award-svg" />
            <div className="award-list" >
                {awards.map((item) => (
                    <Award key={item.id} img={item.img} desc={item.desc} />
                ))}
            </div>
            <img src={Next} alt="scroll right" onClick={handleLeftClick} className="award-svg" />
        </div>        
    );
};

export default AwardList;
