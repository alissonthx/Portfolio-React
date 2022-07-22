import "./awardList.css";
import Award from "../award/Award";
import { useRef } from "react";
import { useState } from "react";
import { ThemeContext } from "../../context.js";
import { awards } from "../../data.js";
import { ReactComponent as Previous } from "../../Assets/img/previous.svg";
import { ReactComponent as Next } from "../../Assets/img/next.svg";
import { useContext } from "react";

const AwardList = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const [fadeRight, setFadeRight] = useState(false);
    const [fadeLeft, setFadeLeft] = useState(false);
    const [animation, setAnimation] = useState(false);

    const classN = `award-list ${fadeRight ? "fadein-next" : ""}${fadeLeft ? "fadein-previous" : ""}`;
    const classSVG = `award-svg ${animation ? "" : "svg-hide"}${animation ? "" : "svg-hide"}`;

    function FadeinLeft() {
        setFadeLeft(prevState => {
            return !prevState
        });
    };
    function FadeinRight() {
        setFadeRight(prevState => {
            return !prevState
        });
    };
    function SvgHide() {
        setAnimation(prevState => {
            return !prevState
        });
    };

    const carousel = useRef(null);
    const handleLeftClick = (e) => {
        e.preventDefault();
        if (classN.search("fadein-previous") === -1) {
            if (carousel.current.scrollLeft <= 0) {
                //to disable click if fadein-previous is active                
                SvgHide();
            } else {
                carousel.current.scrollLeft -= carousel.current.offsetWidth;
                FadeinLeft();
                setTimeout(FadeinLeft, 500);
            }
        }
    }
    const handleRightClick = (e) => {
        e.preventDefault();
        if (classN.search("fadein-next") === -1) {
            if (carousel.current.scrollLeft >= carousel.current.scrollWidth - carousel.current.offsetWidth) {
                // to disable click if fadein-next is active 
                console.log("disabled");
                SvgHide();
            } else {
                carousel.current.scrollLeft += carousel.current.offsetWidth;
                FadeinRight();
                setTimeout(FadeinRight, 500);
            }
        }
    }

    return (
        <div className="a-award">
            <Previous style={{ stroke: darkMode && "#fff" }} alt="scroll left" onClick={handleLeftClick} className={classSVG} />
            <div className={classN} ref={carousel}>
                {awards.map((item) => (
                    <Award key={item.id} img={item.img} desc={item.desc} link={item.link} title={item.title} />
                ))}
            </div>
            <Next style={{ stroke:"#fff" }} alt="scroll right" onClick={handleRightClick} className={classSVG} />
        </div>
    );
};

export default AwardList;
