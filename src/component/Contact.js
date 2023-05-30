import React from "react";
import "../styles/Contact.css";
import vector from "../assets/Vector.png";
import vector1 from "../assets/Vector (1).png";
import vector2 from "../assets/Vector (2).png";
import vector3 from "../assets/Vector (3).png";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container contact-content">
        <div>
          <p className="fw-bold mt-5">Product</p>
          <p>Bitcoin</p>
          <p>Alt</p>
          <p>Fiat</p>
          <p>Refill</p>
          <p>P2P</p>
        </div>
        <div>
          <p className="fw-bold mt-5">Learn</p>
          <p>Blog</p>
          <p>Help Center</p>
        </div>

        <div className="contact">
          <p className="fw-bold mt-5">Contact</p>
          <p>hello@tradexpress.com</p>
          <p>support@tradexpress.com</p>
          <div className="contact-img">
            <div >
              <img src={vector} alt="" />
            </div>
            <div>
              <img src={vector1} alt="" />
            </div>
            <div>
              <img src={vector2} alt="" />
            </div>
            <div>
              <img src={vector3} alt="" />
            </div>
          </div>
        </div>

        <div>
          <p className="fw-bold mt-5">Company</p>
          <p>About</p>
          <p>Careers</p>
          <p>Rates</p>
          <p>Mobile</p>
        </div>

        <div>
          <p className="fw-bold mt-5" >Legal</p>
          <p>Privacy Policy</p>
          <p>Anti-Money Laudering</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
