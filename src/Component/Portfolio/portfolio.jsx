import { portfolio } from "../ContentManagement";

import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <p className="subtitle-a">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {portfolio.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="work-box">
                <div className="work-img">
                  <img src={item.imgSrc} alt="" className="img-fluid" />
                </div>

                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">{item.title}</h2>
                      <div className="w-more">
                        <span className="w-ctegory">{item.category}</span> /
                        <span className="w-date">{item.date}</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href="portfolio-details.html">
                          <span className="bi bi-plus-circle"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
