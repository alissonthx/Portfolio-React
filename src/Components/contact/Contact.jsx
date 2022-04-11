import "./contact.css";
import Phone from "../../Assets/img/phone.png";
import Email from "../../Assets/img/email.png";
import Address from "../../Assets/img/address.png";
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
              <img src={Phone} alt="" className="c-icon" />
              (44) 9 999437785
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              alissonthx@hotmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              R.Dez de maio, Zona 07, Maringá - PR
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Want to talk</b> with me? consider the following ways to get in
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "rgb(14, 15, 16)", color: darkMode && "#fff"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "rgb(14, 15, 16)", color: darkMode && "#fff"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "rgb(14, 15, 16)", color: darkMode && "#fff"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "rgb(14, 15, 16)", color: darkMode && "#fff"}} name="message" id="" rows="5"></textarea>
            <button>Submit</button>
            {done && <p className="c-done">Your message has been sent!</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact