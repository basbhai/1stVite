import "bootstrap/dist/css/bootstrap.min.css";
import "./service.css";
import { servi } from "../../Component/ContentManagement";

const services = () => {
  return (
    <section id="services" className="services-mf pt-5 route">
      <div className="container services-mf">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Services</h3>
              <p className="subtitle-a">What Can I offer You?</p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="serviceRow container">
          <div className="row">
            {/* loop from here */}

            {servi.map((item, i) => {
              return (
                <div className="col-md-4" key={i}>
                  <div className="service-box">
                    <div className="service-ico">
                      <span className="ico-circle">
                        <i className="bi bi-briefcase"></i>
                      </span>
                    </div>
                    <div className="service-content">
                      <h2 className="s-title">{item.Title}</h2>
                      <p className="s-description text-center">{item.Desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;
