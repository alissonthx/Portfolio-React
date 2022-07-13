import "./award.css";

const Award = ({ img, desc }) => {
    return (
        <div className="award">
            <img src={img} alt="" className="award-img" />
            <div className="award-texts">
                <h4 className="award-title">JavaScript ES6 essencial </h4>
                <p className="award-desc">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default Award;
