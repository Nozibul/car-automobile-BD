import React from "react";
import "./contact.css";
import Header from '../../shared/Header/Header' ;
import Footer from '../Home/Footer/Footer'
import icon1 from "../../images/1i.jpg";
import icon2 from "../../images/2i.jpg";
import icon3 from "../../images/3i.jpg";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contact-body">
        <h2 className="text-white ">Contact Us</h2>
        <div className="card-group pt-3 ">
          <div className="card contact-card">
            <img className="contact-img" src={icon1} alt="" />
            <div className="card-body">
              <h5 className="card-title">Phone Number</h5>
              <p className="card-text">
                {" "}
                +0025655454 <br /> +8007227227
              </p>
            </div>
          </div>
          <div className="card contact-card">
            <img className="contact-img" src={icon2} alt="" />
            <div className="card-body">
              <h5 className="card-title">Email Address</h5>
              <p className="card-text">
                carbd@care.com <br /> automobailebd@gmail.com
              </p>
            </div>
          </div>
          <div className="card contact-card">
            <img className="contact-img" src={icon3} alt="" />
            <div className="card-body">
              <h5 className="card-title">Location</h5>
              <p className="card-text">
                {" "}
                southzone,
                <br /> BD
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
