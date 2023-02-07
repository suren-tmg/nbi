import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "animate.css";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/cars2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="caption">
              <h3 className="carousel-title">Summit & Awards Program</h3>
              <p className="carousel-text">
                Strengthen Nepal's economy through innovation and
                entrepreneurship
              </p>
              <div className="carousel-button">
                <button>LEARN MORE</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/cars1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="caption">
              <h3 className="carousel-title">
                Nepal Youth Entrepreneurship Summit
              </h3>
              <p className="carousel-text">
                Largest Entrepreneurship Summit of Nepal
              </p>
              <div className="carousel-button">
                <button>LEARN MORE</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/cars3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="caption">
              <h3 className="carousel-title">Make in Nepal-स्वदेशी</h3>
              <p className="carousel-text">
                In order to bring Nepali products to the international market.
              </p>
              <div className="carousel-button">
                <button>LEARN MORE</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
