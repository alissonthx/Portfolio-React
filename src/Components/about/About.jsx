import "./about.css";
import Abt from "../../Assets/img/about.jpg";
import Carousel from "../carousel/Carousel";

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
          Web developer with a passion for creating beautiful and functional
          websites, systems and applications.
        </p>
        <p className="a-desc">
          I am a self-taught web developer with a background in business and
          management. I have a passion for React.js and Node.js. Actually
          working on a projects with PHP and Laravel, using MySql database.
        </p>
        {/* Carousel */}
        <Carousel/>        
        {/* Carousel ending */}
      </div>
    </div>
  );
};

export default About;
