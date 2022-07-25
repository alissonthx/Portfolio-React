import "./next.css";
import right from "../../Assets/img/right.svg";

const Next = (props) => {
	return (
		<div className="award-svg" onClick={() => props.onClick()}>
			<img src={right} alt="right arrow" />
		</div>
	)
}

export default Next