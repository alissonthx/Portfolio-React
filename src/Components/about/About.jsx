import "./about.css";
import Abt from "../../Assets/img/about.jpg";
import AwardList from "../awardList/AwardList";

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
          Game developer with a passion for creating beautiful and functional
          games, websites and applications.
        </p>
        <p className="a-desc">
          I am a self-taught game developer with a background in web development. I have a passion for Unity using C# as programming language, javascript, CSS3 and React.js. Actually
          working on a projects with Construct 3 game engine and Unity.
        </p>
        {/* Carousel */}
        <AwardList/>        
        {/* Carousel ending */}
      </div>
    </div>
  );
};

export default About;
