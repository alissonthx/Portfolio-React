import "./about.css"
import abt from "../../Assets/img/about.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card-bg"></div>
        <div className="a-card">
          <img src={abt} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right"></div>
    </div>
  )
}

export default About