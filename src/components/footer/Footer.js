import React from "react";
import "./style.css";
import logo from "../../img/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-8 footer-section">
              <div className="footer-logo">
                <img src={logo} alt="" />
              </div>
              <div className="footer-contact">
                <h4 className="ps-4 ms-2">Nepal Business Institute(NBI)</h4>
                <ul>
                  <li>Dillibazar Kathmandu, Nepal</li>
                  <li>Telephone: 977–01–4442445</li>
                  <li>Email: nepalbusinessinstitute@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-social-icon pt-md-4">
                <li className="ficon">
                  <FaFacebookF className="social_icon" />
                </li>
                <li className="ficon">
                  <FaTwitter className="social_icon" />
                </li>
                <li className="ficon">
                  <FaLinkedinIn className="social_icon" />
                </li>
                <li className="ficon">
                  <FaYoutube className="social_icon" />
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right container pt-2">
        <div className="copy">
          <p>&copy;2023.NBI.All Rights Reserved. </p>
        </div>
        <div className="powered_by">
          <p>
            Powered By{" "}
            <a href="https://sinepal.com/" target="__blank">
              Smart Innovation Nepal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
