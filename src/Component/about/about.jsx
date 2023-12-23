import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import me from "../../assets/IMG_0836.png";
import "./about.css";
import { ProgressBar } from "./progressBar";

import Plx from "react-plx";
const About = () => {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="aboutBox d-flex justify-content-center align-items-center">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="box-shadow-full">
                <Row>
                  <Col md={6}>
                    <Row>
                      <Col sm={6} md={5}>
                        <div className="about-img">
                          <img
                            src={me}
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </Col>
                      <Col sm={6} md={7}>
                        <div className="about-info">
                          <p>
                            <span className="title-s">Name: </span>
                            <span>Basanta Shrestha</span>
                          </p>
                          <p>
                            <span className="title-s">Profile: </span>
                            <span>Full Stack Developer</span>
                          </p>
                          <p>
                            <span className="title-s">Email: </span>
                            <span>basbhai@live.com</span>
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <ProgressBar />
                  </Col>

                  <Col md={6}>
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      <p className="lead">
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus. Curabitur arcu erat, accumsan id imperdiet
                        et, porttitor at sem. Praesent sapien massa, convallis a
                        pellentesque nec, egestas non nisi. Nulla porttitor
                        accumsan tincidunt.
                      </p>
                      <p className="lead">
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a. Vivamus suscipit tortor eget felis porttitor
                        volutpat. Vestibulum ac diam sit amet quam vehicula
                        elementum sed sit amet dui. porttitor at sem.
                      </p>
                      <p className="lead">
                        Nulla porttitor accumsan tincidunt. Quisque velit nisi,
                        pretium ut lacinia in, elementum id enim. Nulla
                        porttitor accumsan tincidunt. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default About;
