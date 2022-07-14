import "./awardList.css";
import { useRef } from "react";
import { useState } from "react";
import { awards } from "../../data.js";
import Award from "../award/Award";
import Previous from "../../Assets/img/previous.svg";
import Next from "../../Assets/img/next.svg";

const AwardList = () => {

    function fadein() {
        const [fade, setFade] = useState(false)
        setFade(prevState => {
            return !prevState
        })
    }
}

const carousel = useRef(null);
const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    fadein();
}
const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    fadein();
}

return (
    <div onAnimationEnd={triggerFade} className={"a-award"}{fade ? 'fadeIn' : 'visibleClass'}>
        <img src={Previous} alt="scroll left" onClick={handleLeftClick} className="award-svg" />
        <div className="award-list" ref={carousel}>
            {awards.map((item) => (
                <Award key={item.id} img={item.img} desc={item.desc} />
            ))}
        </div>
        <img src={Next} alt="scroll right" onClick={handleRightClick} className="award-svg" />
    </div>
);
};

export default AwardList;
