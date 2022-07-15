import "./awardList.css";
import { useRef } from "react";
import { useState } from "react";
import { awards } from "../../data.js";
import Award from "../award/Award";
import Previous from "../../Assets/img/previous.svg";
import Next from "../../Assets/img/next.svg";

const AwardList = () => {

    const [fadeRight, setFadeRight] = useState(false);
    const [fadeLeft, setFadeLeft] = useState(false);
    
    const classN = `award-list ${fadeRight ? "fadein-next" : ""}${fadeLeft ? "fadein-previous" : ""}`;

    function FadeinLeft() {
        setFadeLeft(prevState => {
            return !prevState
        })
    }
    function FadeinRight() {
        setFadeRight(prevState => {
            return !prevState
        })
    }

    const carousel = useRef(null);
    const handleLeftClick = (e) => {
        e.preventDefault();
        if (classN.search("fadein-previous") === -1) {
            if (carousel.current.scrollLeft <= 0) {
            } else {
                carousel.current.scrollLeft -= carousel.current.offsetWidth;
                FadeinLeft();
                setTimeout(FadeinLeft, 1000);
            }
        }
    }
    const handleRightClick = (e) => {
        e.preventDefault();
        if (classN.search("fadein-next") === -1) {
            if (carousel.current.scrollLeft >= carousel.current.scrollWidth - carousel.current.offsetWidth) {

            } else {
                carousel.current.scrollLeft += carousel.current.offsetWidth;
                FadeinRight();
                setTimeout(FadeinRight, 1000);
            }
        }
    }

    return (
        <div className="a-award">
            <img src={Previous} alt="scroll left" onClick={handleLeftClick} className="award-svg" />
            <div className={classN} ref={carousel}>
                {awards.map((item) => (
                    <Award key={item.id} img={item.img} desc={item.desc} />
                ))}
            </div>
            <img src={Next} alt="scroll right" onClick={handleRightClick} className="award-svg" />
        </div>
    );
};

export default AwardList;
