import "./contact.css";
import Phone from "../../Assets/img/phone.png";
import Email from "../../Assets/img/email.png";
import Address from "../../Assets/img/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

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
          <h1 className="c-title">Let's discuss your project</h1>
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
              Zona 07, Maringá - PR
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Lorem ipsum dolor</b> sit amet consectetur, adipisicing elit. Illum quos est illo nulla odit quod, unde voluptatum
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea name="message" id="" rows="5"></textarea>
            <button>Submit</button>
            {done && <p className="c-done">Your message has been sent!</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact