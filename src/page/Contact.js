import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-5 pb-5 m-4 m-md-0">
      <div className="container pt-5 pb-5">
        <div className="row cont">
          <div className="col-lg-8 p-5">
            <div className="contact-head pb-4">
              <h3>Send Us a Message!</h3>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="input">
                  <input type="text" placeholder="Full Name *" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input">
                  <input type="email" placeholder="Email Address *" required />
                </div>
              </div>
            </div>
            <br />
            <div className="message">
              <textarea
                name="message"
                id="message"
                className="w-100 p-2"
                cols="30"
                rows="6"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="more-button mt-4">
              <button>Send</button>
            </div>
          </div>
          <div className="col-lg-4 cdetails p-4">
            <div className="contact-head pb-4">
              <h3 className="text-white">Contact Us!</h3>
            </div>
            <div className="contact-deatils">
              <div className="contact pb-4">
                <h5>
                  <FaEnvelope className="cicon" />
                  <span>Email Address</span>
                </h5>
                <p>nepalbusinessinstitute@gmail.com</p>
              </div>
              <div className="contact pb-4">
                <h5>
                  <FaMapMarkerAlt className="cicon" />
                  <span>Location</span>
                </h5>
                <p>Dillibazar Kathmandu, Nepal</p>
              </div>
              <div className="contact">
                <h5>
                  <FaPhoneAlt className="cicon" />
                  <span>Contact</span>
                </h5>
                <p> +977–01–4442445</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
