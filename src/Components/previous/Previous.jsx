import "./previous.css";
import left from "../../Assets/img/left.svg";

const Previous = (props) => {
	return (
		<div className="award-svg" onClick={() => props.onClick()}>
			<img src={left} alt="left arrow" />
		</div>
	)
}

export default Previous
