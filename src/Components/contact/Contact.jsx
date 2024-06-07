import "./contact.css";
import Address from "../../Assets/img/address.png";
import Resume from "../../Assets/img/resume.png";
import Github from "../../Assets/img/github.png";
import Linkedin from "../../Assets/img/linkedin.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2b4iajo', 'template_jowmvtq', formRef.current, 'F6Ebt5amjFFFNDvqb')
      .then((result) => {
        console.log(result.text);
        setDone(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact-me</h1>
          <div className="c-info">            
            <div className="c-info-item">
              <img src={Address} alt="address icon" className="c-icon" />
              Maringá, Paraná, Brazil
            </div>
            <a style={{ backgroundColor: darkMode && "rgb(14, 15, 16)", color: darkMode && "#fff" }} href="https://www.linkedin.com/in/alisson-marques-miquelace/" className="c-info-item">
              <img src={Linkedin} alt="linkedin icon" className="c-icon" />
              LinkedIn
            </a>
            <a style={{ backgroundColor: darkMode && "rgb(14, 15, 16)", color: darkMode && "#fff" }} href="https://www.canva.com/design/DAFubOFfHlo/2VKIvDCf8I32Xxg2SLflpg/view?utm_content=DAFubOFfHlo&utm_campaign=designshare&utm_medium=link&utm_source=editor" className="c-info-item">
              <img src={Resume} alt="Resume icon" className="c-icon" />
              Resume
            </a>
            <a style={{ backgroundColor: darkMode && "rgb(14, 15, 16)", color: darkMode && "#fff" }} href="https://github.com/alissonthx" className="c-info-item">
              <img src={Github} alt="github icon" className="c-icon" />
              GitHub
            </a>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Wanna talk with me?</b> consider the following ways to get a fresh start.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{ backgroundColor: darkMode && "rgb(14, 15, 16)", color: darkMode && "#fff" }} type="text" placeholder="Name" name="user_name" />
            <input style={{ backgroundColor: darkMode && "rgb(14, 15, 16)", color: darkMode && "#fff" }} type="text" placeholder="Subject" name="user_subject" />
            <input style={{ backgroundColor: darkMode && "rgb(14, 15, 16)", color: darkMode && "#fff" }} type="text" placeholder="Email" name="user_email" />
            <textarea style={{ backgroundColor: darkMode && "rgb(14, 15, 16)", color: darkMode && "#fff" }} name="message" id="" rows="5"></textarea>
            <button>Submit</button>
            {done && <p className="c-done">Your message has been sent!</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
