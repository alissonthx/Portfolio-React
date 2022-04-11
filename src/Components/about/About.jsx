import "./about.css"
import Abt from "../../Assets/img/about.jpg"
import Award from "../../Assets/img/award.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Abt} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
          Web developer with a passion for creating beautiful and functional websites, systems and applications.
        </p>
        <p className="a-desc">
          I am a self-taught web developer with a background in business and management. I have a passion for React.js and Node.js. Actually working on a projects with PHP and Laravel, using MySql database.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">JavaScript ES6 essencial </h4>
            <p className="a-award-desc">
              JavaScript ES6 essencial, is a free online course for beginners learn JavaScript basics for web.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About