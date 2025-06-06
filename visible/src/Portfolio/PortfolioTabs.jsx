import React, { useState } from "react";
import portrait1 from "../assets/Hom1ImgFail/portfolio-portrait-1.webp";
import portfolio2 from "../assets/Hom1ImgFail/portfolio-2.webp";
import portrait3 from "../assets/Hom1ImgFail/portfolio-portrait-2.webp";
import portrait4 from "../assets/Hom1ImgFail/portfolio-portrait-4.webp";
import portrait5 from "../assets/Hom1ImgFail/portfolio-portrait-1.webp";

const PortfolioTabsSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    {
      id: "tab1",
      title: "Vestibulum ante ipsum",
      content: { image1: portrait1, image2: portfolio2 },
    },
    {
      id: "tab2",
      title: "Woodcraft Design",
      content: { image1: portrait3, image2: portrait4 },
    },
    {
      id: "tab3",
      title: "Luna stride flared",
      content: { image1: portrait4, image2: portrait1 },
    },
    {
      id: "tab4",
      title: "Quisque Velit Nisi",
      content: { image1: portrait5, image2: portfolio2 },
    },
    {
      id: "tab5",
      title: "Curabitur Aliquet",
      content: { image1: portrait3, image2: portrait1 },
    },
  ];

  return (
    <section id="portfolio" className=" section mt-5">
        {/* section heading  */}
         <div
        className="container text-center section-title py-4"
        data-aos="fade-up"
      >
        <span className="description-title">portfolio</span>
        <h2>portfolio</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
{/* section heading end  */}
      <div
        className="container py-3 mt-5 portfolioTabs"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row g-4">
          {/* Nav Tabs */}
          <div className="col-lg-3">
            <ul
              className="nav nav-tabs flex-column"
              role="tablist"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              {tabs.map((tab) => (
                <li className="nav-item mb-3" role="presentation" key={tab.id}>
                  <button
                    className={`nav-link w-100 text-start ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                    role="tab"
                    aria-controls={tab.id}
                    aria-selected={activeTab === tab.id}
                    style={{ cursor: "pointer", fontSize: "16px" }}
                  >
                    {tab.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tab Content */}
          <div className="col-lg-9">
            <div
              className="tab-content"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {tabs.map((tab) => (
                <div
                  className={`tab-pane fade ${
                    activeTab === tab.id ? "show active" : ""
                  }`}
                  id={tab.id}
                  role="tabpanel"
                  key={tab.id}
                >
                  <div className="content-box ps-4">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="image-box">
                          <img
                            src={tab.content.image1}
                            alt=""
                            className="img-fluid"
                            loading="lazy"
                            style={{
                              borderRadius: "10px",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="image-box">
                          <img
                            src={tab.content.image2}
                            alt=""
                            className="img-fluid"
                            loading="lazy"
                            style={{
                              borderRadius: "10px",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTabsSection;
