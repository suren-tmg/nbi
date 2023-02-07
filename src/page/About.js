import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";

const About = () => {
  return (
    <div>
      <div className="about-head p-3 p-md-5">
        <div className="container">
          <h2>About NBI</h2>
        </div>
      </div>
      <div className="container about pt-2 pt-md-5 pb-2 pb-md-5">
        <div className="abouts pt-lg-5 pb-lg-5">
          <div className="col-lg-5 mt-md-5">
            <div className="about-img">
              <img
                className="w-100"
                src="./images/cars2.jpg"
                alt="Second slide"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-content">
              <p className="pt-lg-5">
                The National Business Institute (NBI) is an academic
                organization that takes the lead in fostering entrepreneurship
                and business environment at the national level. NBI is founded
                with the core motto &quot;Learning Business, Inspiring
                Growth&quot; and strives to plan Nepal&#39;s economic
                development through entrepreneurship and innovation. <br />{" "}
                <br />
                Programs for education, business, and skill development are
                being run in collaboration with the government, private sector,
                diplomatic missions and charitable organizations. This
                organization aims to make Nepal&#39;s economic sector
                competitive, transformative and open up new chances in the
                global market.
              </p>
            </div>
          </div>
        </div>
        {/* mission vision goals */}
        <div className="vmg pt-md-4">
          <div className="mission-vision-goals container pt-md-5 pb-md-5">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="vision pt-4 pb-4 mb-4">
                  <div className="vmg-head">
                    <h4>Vision</h4>
                  </div>
                  <div className="vmg-text pb-4">
                    <p>
                      The objective is to strengthen Nepal's economy through
                      innovation and entrepreneurship in order to create
                      employment for all the youth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="mission  pt-4 pb-4">
                  <div className="vmg-head">
                    <h4>Mission</h4>
                  </div>
                  <div className="vmg-text">
                    <p>
                      NBI's priority is to involve the young generation in the
                      economic sector of Nepal. National aspiration of a
                      prosperous Nepal will be fulfilled if youth can receive an
                      education at home.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mt-4 mt-md-0">
                <div className="goals  pt-4 pb-4">
                  <div className="vmg-head">
                    <h4>Goals</h4>
                  </div>
                  <div className="vmg-text">
                    <p>
                      To develop qualified and successful entrepreneurs through
                      entrepreneurship training, enhancing financial literacy
                      and access to finance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-3  pt-lg-5 pb-3">
          <div className="col-md-4 ">
            <div className="goals p-4 about-goals">
              <h3 className="pb-2">Goals</h3>
              <p>
                - Investigate the business climate of the business sector and
                submit a report.
              </p>
              <p>
                - To create and produce skilled manpowers by offering corporate
                trainings.
              </p>
              <p>
                - To develop qualified and successful entrepreneurs through
                entrepreneurship training.
              </p>
              <p>
                - To guide the Nepali economy by establishing a strong think
                tank that debates about economic development.
              </p>
              <p>
                - Operating as a consultant for both National and International
                investment.
              </p>
              <p>- Enhancing financial literacy and access to finance.</p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="objectives p-4">
              <h3 className="pb-2">Objectives</h3>
              <p>
                -Schools, colleges, and universities with a National and
                International focus will operate with authorization form
                relevant bodies.
              </p>
              <p>
                - A variety of skill-based training programs for
                entrepreneurship/business promotion, leadership development, and
                employment-based training will be arranged, along with seminars,
                meetings, conferences, and contests.
              </p>
              <p>
                - Startup fund program, business incubation program, inter
                provincial and international industrial tour, business dialogue
                and bootcamp programs can be conducted for the promotion of
                startup enterprises.
              </p>
              <p>
                - Award programs can be organized for individuals and
                organizations who support entrepreneurship and business
                development.
              </p>
              <p>
                - Study, research and consultancy services pertaining to
                business and business environment can be provided.
              </p>
              <p>
                - Fintech programs can be conducted to increase financial
                literacy and financial access.
              </p>
              <p>
                - Students of school and university level can participate in an
                experimental program mentored by Nepal Business School.
              </p>
              <p>
                - In collaboration with the Local, Provincial and Federal
                Government, business incubation programs and training related to
                entrepreneurship promotion can be conducted using local
                resources and tools.
              </p>
              <p>
                - In order to bring Nepali products to the international market,
                it is possible to export Nepali products abroad after obtaining
                approval from the relevant authorities. For this, an e-commerce
                platform can be used to develop the idea of a technologically
                advanced firm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
