import React from "react";
import { skills } from "../ContentManagement";
import { Container, Row, Col } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap-grid.css'

export const ProgressBar = () => {
  return (
    <div>
      {skills.map((data, i) => {
        return (
          <div key={i}>
            <Row>
              <Col className="col-sm-3">{data.name}</Col>
              <Col className="col-sm-9" style={{ paddingTop: "1.2rem" }}>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${data.value}%`,
                    }}
                  >
                    <div className="progress-value">{data.value}%</div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};
