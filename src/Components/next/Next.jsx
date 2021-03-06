import "./next.css";
import right from "../../Assets/img/right.svg";

const Next = (props) => {
	return (
		<div className={props.className} onClick={() => props.onClick()} >
			<img style={props.style} src={right} alt="right arrow" />
		</div>
	)
}

export default Next