import "./contact.css";
import Phone from "../../Assets/img/phone.png";
import Email from "../../Assets/img/email.png";
import Address from "../../Assets/img/address.png";

const Contact = () => {
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
              Zona 07, Maringá - PR
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Lorem ipsum dolor</b> sit amet consectetur, adipisicing elit. Illum quos est illo nulla odit quod, unde voluptatum
          </p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Subject" />
            <input type="text" placeholder="Email" />
            <textarea name="" id="" rows="5"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact