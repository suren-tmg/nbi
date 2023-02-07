import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../img/nbilogo.png";

const Headers = () => {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 2 }}>
      <div className="nav-bars pe-2">
        <Navbar collapseOnSelect expand="lg" className="second_bar">
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="logo" className="nbi_logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="pt-4 pb-4">
            <div className="col-lg-2"></div>
            <Nav>
              <div className="ps-lg-5"></div>
              <Link to="/about-us" className="text-decoration-none nav-link">
                <li className="link">
                  <span>About</span>
                </li>
              </Link>
              <Nav.Link className="nav-link">
                <li className="link">
                  <span>Programs</span>
                  <ul className="navdropdown">
                    <li>Skill Lab Program</li>
                    <li>Summit &amp; Awards Programs</li>
                    <li>Start-up Fund Program</li>
                    <li>Business Incubation Program</li>
                    <li>Industrial visits Program</li>
                    <li>Business bootcamp programs</li>
                    <li>Fintech Program</li>
                    <li>Business consultant</li>
                  </ul>
                </li>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <li className="link">
                  <span>Leadership</span>
                  <ul className="navdropdown">
                    <Link
                      to="/business-thinktank"
                      className="text-decoration-none"
                    >
                      <li>Business Thinktank </li>
                    </Link>
                    <Link
                      to="/senior-consultant"
                      className="text-decoration-none"
                    >
                      <li>Senior Consultant </li>
                    </Link>
                  </ul>
                </li>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <li className="link">
                  <span>Resource & Media</span>
                  <ul className="navdropdown">
                    <li>Press Release </li>
                    <li>Business Report </li>
                    <li>Annual Report </li>
                    <li>Speech/Video </li>
                    <li>Gallery</li>
                    <li>Publication </li>
                  </ul>
                </li>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <li className="link">
                  <span>Get Involved</span>
                  <ul className="navdropdown">
                    <li>Internship </li>
                    <li>Volunteering </li>
                    <li>Partnership </li>
                    <li>Career</li>
                  </ul>
                </li>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Headers;
