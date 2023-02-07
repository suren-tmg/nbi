import React from "react";
import Banner from "../components/header/Banner";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./style.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="business_moto pt-5 pb-5">
        <h3 className="p-2  pt-lg-5  pb-lg-5">
          "Learning Business, Inspiring Growth"
        </h3>
      </div>
      {/* Message from co-ordinator */}
      <div className="co-rodinator_message pt-lg-5  pb-lg-5">
        <div className="messege-section  pt-lg-5  pb-lg-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="co-ordinator_image">
                <img
                  src="./images/bishal.jpg"
                  className="w-100 p-3"
                  alt="bishal_gaire"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="co-ordinator-message">
                <h5 className="co-ordinator-name pt-md-3 mt-4">
                  Mr. Bishal Gaire
                </h5>
                <div className="message">
                  <h2 className="message-title">
                    Message from the Executive Chairman
                  </h2>
                  <h6 className="pt-2">Welcome to Nepal Business Institute</h6>
                  <p className="pt-md-2">
                    NBI promotes entrepreneurship and business efficiency in
                    collaboration with the government and private sector. Our
                    expertise ranges from mentorship to nascent start-up
                    companies to industry analysis of large industrialists.
                    Today, conducive business climates are essential. NBI
                    aspires to become recognized as a mentorship organization, a
                    corporate partner for the private sector, as a strong
                    partner of the private sector and a business think tank for
                    the government.
                    <br />I am confident that our collaboration will
                    significantly contribute to the  economic prosperity of the
                    country.
                  </p>
                </div>
              </div>
            </div>
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
                    entrepreneurship training, enhancing financial literacy and
                    access to finance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* NBI PROGRAMS */}
      <div className="nbi-program pt-5 pb-4">
        <div className="program-title pb-md-4">
          <h3>NBI Programs</h3>
        </div>
        <div className="program-cards pt-4">
          <div className="row">
            <div className="col-lg-3 col-md-6 ">
              <div className="pcard">
                <div className="card-image">
                  <img
                    src="./images/skilllab.jpg"
                    className="w-100"
                    alt="..."
                  />
                </div>
                <div className="card-content ps-3 pe-3">
                  <h5 className="pt-4">Skill Lab Program</h5>
                  <p className="pt-2">
                    The skill lab program includes trainings in
                    entrepreneurship, leadership development, corporate HR,
                    corporate business seminars, youth entrepreneurship and
                    mentorship, self-employment, and other trainings.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="pcard card1">
                <div className="card-image">
                  <img
                    src="./images/summitaward.jpg"
                    className="w-100"
                    alt="..."
                  />
                </div>
                <div className="card-content ps-3 pe-3">
                  <h5 className="pt-4">Summit & Awards Programs </h5>
                  <p className="pt-2">
                    Numerous high-level summits, conferences, awards and
                    seminars have been held, including Nepal Business
                    Summit/Award Program, Economic Summit, Provincial
                    Entrepreneurship Seminar.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="pcard card2">
                <div className="card-image">
                  <img src="./images/startup.jpg" className="w-100" alt="..." />
                </div>
                <div className="card-content ps-3 pe-3">
                  <h5 className="pt-4">Start-up Fund Program </h5>
                  <p className="pt-3">
                    A startup mentoring program is in operation to encourage
                    youth towards entrepreneurship. The startup fund program
                    also includes counseling and seed capital opportunities,
                    counseling, and training in innovation and entrepreneurship.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="pcard card3">
                <div className="card-image">
                  <img
                    src="./images/businessincub.jpg"
                    className="w-100"
                    alt="..."
                  />
                </div>
                <div className="card-content ps-3 pe-3">
                  <h5 className="pt-4">Business Incubation Program.</h5>
                  <p className="pt-3">
                    Business incubators are specially designed programs to
                    support the innovation and expansion of emerging
                    enterprises. They usually provide workspaces, mentorship,
                    education and access to investors for startups or solo
                    entrepreneurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="program-cards pt-4">
          <div className="row">
            <div className="col-lg-3 col-md-6 ">
              <div className="pcard card4">
                <div className="card-image">
                  <img
                    src="./images/industryvisit.jpg"
                    className="w-100"
                    alt="..."
                  />
                </div>
                <div className="card-content ps-3 pe-3">
                  <h5 className="pt-4">Industrial visits Program</h5>
                  <p className="pt-3">
                    Interprovincial and international industrial tour programs
                    have been designed to help students strengthen their
                    business abilities and learn firsthand about the successes
                    and failures of various businesses. A 5 to 7 day tour
                    package is available for interprovincial travel to
                    Biratnagar, Birganj, Butwal, and Pokhara; for international
                    travel, this package is available for Thailand, Malaysia,
                    Singapore, Dubai, and other nations. Certain requirements
                    must be met in order to participate, and a package program
                    during the visit that includes seminars, conferences,
                    entertainment, etc. has also been designed.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="pcard card5">
                <div className="card-image">
                  <img
                    src="./images/bbootcam.jpg"
                    className="w-100"
                    alt="..."
                  />
                </div>
                <div className="card-content ps-3 pe-3">
                  <h5 className="pt-4">Business bootcamp programs</h5>
                  <p className="pt-3">
                    Bootcamp is a global network of business-specific startup
                    accelerators that provides investment and mentorship. This
                    mentorship-driven strategy is made possible by startup
                    bootcamp, which equips entrepreneurs with crucial resources
                    during a three-month accelerator program.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="pcard card6">
                <div className="card-image">
                  <img src="./images/fintech.jpg" className="w-100" alt="..." />
                </div>
                <div className="card-content ps-3 pe-3">
                  <h5 className="pt-4">Fintech Program </h5>
                  <p className="pt-3">
                    This program has been conducted to increase financial
                    literacy and financial access. It includes programs about
                    the fintech industry as a whole, the digital economy,
                    digital platforms and banks, financial sector information,
                    artificial intelligence, and blockchain and cryptocurrency
                    awareness.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="pcard card7">
                <div className="card-image">
                  <img
                    src="./images/consultant.jpg"
                    className="w-100"
                    alt="..."
                  />
                </div>
                <div className="card-content ps-3 pe-3">
                  <h5 className="pt-4">Business consultant </h5>
                  <p className="pt-3">
                    NBI serves as a consultant on issues pertaining to portfolio
                    management, industry analysis, investment, employee quality
                    and business operations .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* NBI PROGRAMS */}
      <div className="initiatives">
        <div className="nbi-program  pt-5 pb-4">
          <div className="program-title">
            <h3>NBI INITIATIVES </h3>
          </div>
          <div className="program-cards pt-4">
            <div className="row">
              <div className="col-lg-3 col-md-6 ">
                <div className="pcard">
                  <div className="card-image">
                    <img src="./images/nbs.png" className="w-100" alt="..." />
                  </div>
                  <div className="card-content ps-3 pe-3">
                    <h5 className="pt-4">Nepal Business Summit</h5>
                    <p className="pt-3">
                      Nepal Business Summit is a high-level Government and
                      Private sector Summit, where high-ranking government
                      officials, politicians, senior private sector
                      entrepreneurs, International Investors and Non-Resident
                      Nepali entrepreneurs participates.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="pcard card1">
                  <div className="card-image">
                    <img
                      src="./images/nepalbusinessschool.jpg"
                      className="w-100"
                      alt="..."
                    />
                  </div>
                  <div className="card-content ps-3 pe-3">
                    <h5 className="pt-4">Nepal Business School</h5>
                    <p className="pt-3">
                      Students of school and university level can participate in
                      an experimental program mentored by Nepal Business School.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="pcard card2">
                  <div className="card-image">
                    <img
                      src="./images/madeinnepal.jpg"
                      className="w-100"
                      alt="..."
                    />
                  </div>
                  <div className="card-content ps-3 pe-3">
                    <h5 className="pt-4">Made in Nepal</h5>
                    <p className="pt-3">
                      In order to bring Nepali products to the international
                      market, it is possible to export Nepali products abroad
                      after obtaining approval from the relevant authorities.
                      For this, an e-commerce platform can be used to develop
                      the idea of a technologically advanced firm.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="pcard card3">
                  <div className="card-image">
                    <img
                      src="./images/businessindex.jpg"
                      className="w-100"
                      alt="..."
                    />
                  </div>
                  <div className="card-content ps-3 pe-3">
                    <h5 className="pt-4">Nepal Business Index</h5>
                    <p className="pt-3">
                      Investigate the business climate of the business
                      sector and submit a report.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* news section */}
      <div className="news-video pt-5 pb-5">
        <div className="news container">
          <div className="row ">
            <div className="col-lg-7">
              <div className="video-section">
                <div className="video-head pb-3">
                  <h3>Video Gallery</h3>
                </div>
                <div className="videos p-2">
                  <Carousel fade>
                    <Carousel.Item>
                      <iframe
                        className="w-100"
                        src="https://www.youtube.com/embed/09kygdAlYto"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen=""
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <iframe
                        className="w-100"
                        src="https://www.youtube.com/embed/5pa6JFBgIKY"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen=""
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <iframe
                        className="w-100"
                        src="https://www.youtube.com/embed/zlPXJgaWxoo"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen=""
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="news-section">
                <div className="news-head pb-3">
                  <h3>News Section</h3>
                </div>
                <div className="news-section pt-1">
                  <div className="news-card">
                    <div className="d-flex">
                      <div className="col-md-4">
                        <img
                          src="./images/news1.jpg"
                          className="w-100 p-1"
                          alt="news__image"
                        />
                      </div>
                      <div className="col-md-8">
                        <a
                          href="https://clickmandu.com/2022/12/225401.html"
                          target="__blank"
                          className="text-decoration-none text-dark"
                        >
                          <h5 className="pt-3 pt-md-2 p-2">
                            ‘नेपाल व्यवसाय शिखर सम्मेलन २०२३’ आयोजना हुने
                          </h5>
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="news-card">
                    <div className="d-flex">
                      <div className="col-md-4">
                        <img
                          src="./images/news2.jpg"
                          className="w-100 p-1"
                          alt="news__image"
                        />
                      </div>
                      <div className="col-md-8">
                        <a
                          href="https://thehimalayantimes.com/business/nepal-business-summit-2023-to-be-organised"
                          target="__blank"
                          className="text-decoration-none text-dark"
                        >
                          <h5 className="pt-3 pt-md-2 p-2">
                            Nepal Business Summit 2023 to be organised
                          </h5>
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="news-card">
                    <div className="d-flex">
                      <div className="col-md-4">
                        <img
                          src="./images/news3.jpg"
                          className="w-100 p-1"
                          alt="news__image"
                        />
                      </div>
                      <div className="col-md-8">
                        <a
                          href="https://www.nepalbusiness.com/News/Details/2355?fbclid=IwAR3l77bLWgG_4pAkBzosYFZGnK2Nz_4jGZXHivGrN7DG5b0qAE4NDz5-y3U"
                          target="__blank"
                          className="text-decoration-none text-dark"
                        >
                          <h5 className="pt-3 pt-md-2 p-2">
                            सातै प्रदेशमा ‘प्रादेशिक उद्यमशिलता परिसंवाद’ आयोजना
                            हुँदै
                          </h5>
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="news-card">
                    <div className="d-flex">
                      <div className="col-md-4">
                        <img
                          src="./images/news4.jpg"
                          className="w-100 p-1"
                          alt="news__image"
                        />
                      </div>
                      <div className="col-md-8">
                        <a
                          href="https://www.nepalbusiness.com/News/Details/3694?fbclid=IwAR1ELkwkxa62Ycz82_9WZ4vVdxhP8pVBSvLqGX8qhozh4Y1Fxf0s1-9IFlE"
                          target="__blank"
                          className="text-decoration-none text-dark"
                        >
                          <h5 className="pt-3 pt-md-2 p-2">
                            महासंघको सञ्चार परामर्शदातामा नेपाल बिजनेश डटकम
                            (भिडियोसहित)
                          </h5>
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div className="more-button">
            <button>Read More</button>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="partners pb-5 col-md-10 offset-md-1">
        <div className="container">
          <div className="partners-head pt-5 pb-4">
            <h3>Our Trusted Clients</h3>
          </div>
          <div className="row pat pt-4">
            <div className="col-lg-4 col-md-6 one">
              <div className="partner">
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Tooltip id="button-tooltip">
                      नेपाल सरकार अर्थ मन्त्रालय
                    </Tooltip>
                  }
                >
                  <img src="./images/go.jpg" height={200} width={220} alt="" />
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 two">
              <div className="partner">
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Tooltip id="button-tooltip">
                      नेपाल सरकार उद्योग, वाणिज्य तथा आपूर्ति मन्त्रालय
                    </Tooltip>
                  }
                >
                  <div className="partner-logo">
                    <img
                      src="./images/go.jpg"
                      height={200}
                      width={220}
                      alt=""
                    />
                  </div>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 three">
              <div className="partner">
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Tooltip id="button-tooltip">
                      राष्ट्रिय वाणिज्य बैंक
                    </Tooltip>
                  }
                >
                  <div className="partner-logo">
                    <img src="./images/rbb.jpg" className="w-100" alt="" />
                  </div>
                </OverlayTrigger>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 one">
              <div className="partner">
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Tooltip id="button-tooltip">
                      नेपाल उधोग परिसंघ – (सिएनआई )
                    </Tooltip>
                  }
                >
                  <div className="partner-logo">
                    <img src="./images/cin.jpg" alt="" />
                  </div>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 two">
              <div className="partner">
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Tooltip id="button-tooltip">
                      हेपफ्र इन्टरनेशनल नेपाल
                    </Tooltip>
                  }
                >
                  <div className="partner-logo">
                    <img src="./images/heifra.gif" height={200} alt="" />
                  </div>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 three">
              <div className="partner">
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Tooltip id="button-tooltip">
                      Confederation of Fanks and Financial Institutions, Nepal
                    </Tooltip>
                  }
                  // overlay={renderTooltip}
                >
                  <div className="partner-logo">
                    <img src="./images/cbfin.png" alt="" />
                  </div>
                </OverlayTrigger>
              </div>
            </div>
          </div>
          <div className="more-button pt-5">
            <center>
              <button>View More</button>
            </center>
          </div>
        </div>
      </div>
      {/* join us */}
      <div className="business_motos pt-4 pb-4">
        <h3 className="p-2  pt-lg-5  pb-lg-5">Join Us</h3>
      </div>
      {/* talk to us */}
      <div className="talk pt-5 pb-5 p-4">
        <div className="col-md-10 offset-md-1">
          <div className="talks">
            <h3>Talk to Us: </h3>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 checks">
              <div className="mb-2 mt-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label ps-1"
                  htmlFor="exampleCheck1"
                >
                  Skill Lab Program
                </label>
              </div>
              <div className="mb-2 mt-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label ps-1"
                  htmlFor="exampleCheck1"
                >
                  Summit &amp; Awards Programs
                </label>
              </div>
              <div className="mb-2 mt-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label ps-1"
                  htmlFor="exampleCheck1"
                >
                  Start-up Fund Program
                </label>
              </div>
              <div className="mb-2 mt-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label ps-1"
                  htmlFor="exampleCheck1"
                >
                  Business Incubation Program
                </label>
              </div>
              <div className="mb-2 mt-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label ps-1"
                  htmlFor="exampleCheck1"
                >
                  Industrial visits Program
                </label>
              </div>
              <div className="mb-2 mt-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label ps-1"
                  htmlFor="exampleCheck1"
                >
                  Business bootcamp programs
                </label>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 checks">
              <div className="mb-2 mt-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label ps-1"
                  htmlFor="exampleCheck1"
                >
                  Fintech Program
                </label>
              </div>
              <div className="mb-2 mt-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label ps-1"
                  htmlFor="exampleCheck1"
                >
                  Business consultant
                </label>
              </div>
              <div className="mb-2 mt-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label ps-1"
                  htmlFor="exampleCheck1"
                >
                  Nepal Business Summit
                </label>
              </div>
              <div className="mb-2 mt-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label ps-1"
                  htmlFor="exampleCheck1"
                >
                  Nepal Business School
                </label>
              </div>
              <div className="mb-2 mt-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label ps-1"
                  htmlFor="exampleCheck1"
                >
                  Made in Nepal
                </label>
              </div>
              <div className="mb-2 mt-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label ps-1"
                  htmlFor="exampleCheck1"
                >
                  Nepal Business Index
                </label>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 form  pt-3 pt-lg-0">
              <div className="form_lebal">
                <input
                  type="text"
                  id="fname"
                  required
                  placeholder="Full name *"
                />
              </div>
              <div className="form_lebal mt-3">
                <input
                  type="number"
                  id="number"
                  required
                  placeholder="Mobile number * "
                />
              </div>
              <div className="form_lebal mt-3">
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Email Address *"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pt-3 pt-lg-0">
              <div className="form_lebal">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  className="w-100 p-1"
                  placeholder="Your message *"
                ></textarea>
              </div>
              <div className="more-button pt-2">
                <center>
                  <button>Submit</button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
