import "./awardList.css";
import Award from "../award/Award";
import { useRef } from "react";
import { useState } from "react";
import { awards } from "../../data.js";
import Next from "../next/Next";
import Previous from "../previous/Previous";
import { ThemeContext } from "../../context.js";
import { useContext } from "react";

const AwardList = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const [fadeRight, setFadeRight] = useState(false);
    const [fadeLeft, setFadeLeft] = useState(false);
    const [animationN, setAnimationN] = useState(true);
    const [animationP, setAnimationP] = useState(false);

    const classN = `award-list ${fadeRight ? "fadein-next" : ""}${fadeLeft ? "fadein-previous" : ""}`;
    const classSVGN = `award-svg ${animationN ? "" : "svg-hide"}`;
    const classSVGP = `award-svg ${animationP ? "" : "svg-hide"}`;

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
        if (carousel.current.scrollLeft >= carousel.current.scrollWidth - carousel.current.offsetWidth) {
            setAnimationN(false);
        } else {
            setAnimationN(true);
        }
        if (carousel.current.scrollLeft <= 0) {
            setAnimationP(false);
        } else {
            setAnimationP(true);
        }
        // setAnimation(prevState => {
        //     return !prevState
        // });
    };

    const carousel = useRef(null);
    const handleLeftClick = () => {
        // e.preventDefault();
        if (classN.search("fadein-previous") === -1) {
            if (carousel.current.scrollLeft <= 0) {
                //to disable click if fadein-previous is active                
                SvgHide();
            } else {
                carousel.current.scrollLeft -= carousel.current.offsetWidth;
                SvgHide();
                FadeinLeft();
                setTimeout(FadeinLeft, 500);
            }
        }
    }
    const handleRightClick = () => {
        // e.preventDefault();
        if (classN.search("fadein-next") === -1) {
            if (carousel.current.scrollLeft >= carousel.current.scrollWidth - carousel.current.offsetWidth) {
                // to disable click if fadein-next is active                 
                SvgHide();
            } else {
                carousel.current.scrollLeft += carousel.current.offsetWidth;
                SvgHide();
                FadeinRight();
                setTimeout(FadeinRight, 500);
            }
        }
    }

    return (
        <div className="a-award">
            <Previous style={{ filter: darkMode && "invert(1)" }} onClick={handleLeftClick} className={classSVGP} />
            <div className={classN} ref={carousel}>
                {awards.map((item) => (
                    <Award key={item.id} img={item.img} desc={item.desc} link={item.link} title={item.title} />
                ))}
            </div>
            <Next style={{ filter: darkMode && "invert(1)" }} onClick={handleRightClick} className={classSVGN} />
        </div>
    );
};

export default AwardList;
