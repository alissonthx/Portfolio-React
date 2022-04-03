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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repudiandae, amet non distinctio possimus libero aliquid. A iusto, enim amet animi labore porro maiores dolorem. Tenetur aliquid repellendus nobis reprehenderit.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          quos, quisquam doloremque, quisquam quisquam doloremque, quisquam
          quisquam doloremque, quisquam quisquam doloremque, quisquam quisquam
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Awards</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quos, quisquam doloremque, quisquam quisquam doloremque, quisquam
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About