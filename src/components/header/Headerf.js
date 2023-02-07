import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Headerf = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
        includedLanguages: "en,ne,hi,zh-CN,fr",
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <div className="headerff">
      <div className="header-first" style={{ marginTop: "-5px" }}>
        <div className="right">
          <ul>
            <Link to="/login" className="text-decoration-none">
              <li>NBI login</li>
            </Link>
            <Link to="/faq" className="text-decoration-none">
              <li>FAQ</li>
            </Link>
            <li>Downloads</li>
            <Link to="/contact-us" className="text-decoration-none">
              <li>Contact</li>
            </Link>
            <div className="col-md-1"></div>
          </ul>
        </div>
        <div className="col-md-1"></div>
        <div className="left">
          <ul>
            <li>
              <FaFacebookF className="social_icon" />
            </li>
            <li>
              <FaTwitter className="social_icon" />
            </li>
            <li>
              <FaLinkedinIn className="social_icon" />
            </li>
            <li>
              <FaYoutube className="social_icon" />
            </li>
            <div id="google_translate_element"></div>
            {/* <li id="google_translate_element">Nepali</li> */}
            {/* nepali, hindi, chinese,french,english */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Headerf;
