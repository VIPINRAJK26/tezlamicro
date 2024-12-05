import React from "react";
import {
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import FeedbackForm from "../components/contactus/FeedbackForm";

const ContactUs = () => {
  return (
    <div className="contact  bg-light justify-content-center py-5 text-center">
      <div className="container">
        <div className="contact-top pb-5">
          <h1 className="fw-bold text-muted">
            When you Need, <br />
            Contact Us
          </h1>
        </div>
        <div className="contact-mid justify-content-center">
          <FeedbackForm />
        </div>
        <div className="contact-bottom ps-md-2">
          <h5 className=" text-md-start">TEZLA Energry Pvt. Ltd. </h5>
          <ul className="list-unstyled text-md-start">
            <li>Head Office</li>
            <li>Ananthapuram Industrial development Plot, </li>
            <li>Kannur, Kumbala, Kasaragod</li>
            <li> Kerala-671321</li>
            <li> <FaPhone/> <FaWhatsapp/> : +91 7902777727 </li>
            <li>Email:tezlacare@tezla.in</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
