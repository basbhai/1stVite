import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import me from "../../assets/bg.png";
import "./hero.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero route bg-image d-flex   d-lg-flex  d-md-flex d-sm-flex  justify-content-center  align-items-center "
      // style="background-image: url(../../assets/dissolve.png)"
    >
      <div className="hero-content display-table">
        <div className="table-cell">
          {/* if undo do it till this remove */}

          <div className="container d-flex justify-content-center align-items-center">
            <div className="image-container">
              <img src={me} className="img-fluid" alt="Responsive" />
            </div>
          </div>
          <div className="container d-flex justify-content-center align-items-center">
            <div className="content-container d-flex justif-content-center align-items-center text-center">
              <h1>I am Basanta Shrestha</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
