import "./award.css";

const Award = ({ img, desc, link, title }) => {
    return (
        <div className="award">
            <a target="_blank" href={link}><img src={img} alt="" className="award-img" /></a>
            <div className="award-texts">
                <h4 className="award-title">{title}</h4>
                <p className="award-desc">{desc}</p>
            </div>
        </div>
    );
};

export default Award;
