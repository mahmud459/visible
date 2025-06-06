import React from "react";
import tab1 from "../assets/Hom1ImgFail/misc-square-6.webp";
import tab2 from "../assets/Hom1ImgFail/tabs2.webp";
import tab3 from "../assets/Hom1ImgFail/tabs3.webp";
import tab4 from "../assets/Hom1ImgFail/tabs4.webp";
import tab5 from "../assets/Hom1ImgFail/misc-square-6.webp";
import altsection from '../assets/Hom1ImgFail/altsection.webp'

const FeaturTabsSection = () => {
  const tabs = [
    {
      id: "tab1",
      icon: "bi-people",
      title: "Vestibulum ante ipsum",
      desc: "Proin iaculis purus consequat",
      content: {
        heading: "Nullam Lacinia Consectetur",
        paragraphs: [
          "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
          "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
        ],
        features: [
          "Curabitur aliquet quam id dui posuere blandit",
          "Nulla quis lorem ut libero malesuada feugiat",
          "Vestibulum ac diam sit amet quam vehicula",
          "Donec rutrum congue leo eget malesuada",
        ],
        image: tab1,
      },
    },
    {
      id: "tab2",
      icon: "bi-heart",
      title: "Curabitur aliquet quam",
      desc: "Nulla quis lorem ut libero",
      content: {
        heading: "Aliquam Lorem Ipsum",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
          "Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.",
        ],
        features: [
          "Praesent sapien massa, convallis a pellentesque",
          "Mauris blandit aliquet elit eget tincidunt",
          "Donec sollicitudin molestie malesuada",
          "Vivamus magna justo lacinia eget",
        ],
        image: tab2,
      },
    },
    {
      id: "tab3",
      icon: "bi-house-heart",
      title: "Luna stride flared",
      desc: "Sed ut perspiciatis unde omnis",
      content: {
        heading: "Perspiciatis Unde Omnis",
        paragraphs: [
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        ],
        features: [
          "Accusantium doloremque laudantium",
          "Totam rem aperiam, eaque ipsa",
          "Inventore veritatis et quasi architecto",
          "Beatae vitae dicta sunt explicabo",
        ],
        image: tab3,
      },
    },
    {
      id: "tab4",
      icon: "bi-person-heart",
      title: "Quisque Velit Nisi",
      desc: "Duis aute irure dolor in",
      content: {
        heading: "Duis Aute Irure Dolor",
        paragraphs: [
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        ],
        features: [
          "Excepteur sint occaecat cupidatat non proident",
          "Sunt in culpa qui officia deserunt mollit",
          "Anim id est laborum",
          "Consectetur adipiscing elit",
        ],
        image: tab4,
      },
    },
    {
      id: "tab5",
      icon: "bi-briefcase",
      title: "Curabitur Aliquet",
      desc: "Excepteur sint occaecat cupidatat",
      content: {
        heading: "Business Ready Solutions",
        paragraphs: [
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        ],
        features: [
          "Enterprise-grade architecture",
          "Secure and scalable deployments",
          "Optimized for performance",
          "Easy to integrate and use",
        ],
        image: tab5,
      },
    },
  ];

  return (
    <section id="features-alt" className="features-alt section mt-5">
      <div className="container py-3 " data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {/* Nav Tabs */}
          <div className="col-lg-4">
            <ul
              className="nav nav-tabs flex-column"
              role="tablist"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              {tabs.map((tab, i) => (
                <li className="nav-item mb-3" role="presentation" key={tab.id}>
                  <a
                    className={`nav-link ${i === 0 ? "active" : ""}`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${tab.id}`}
                    role="tab"
                    aria-selected={i === 0 ? "true" : "false"}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="icon-box">
                        <i className={`bi ${tab.icon}`}></i>
                      </div>
                      <div className="ms-3">
                        <h4 style={{ margin: "0", fontSize: "20px" }}>
                          {tab.title}
                        </h4>
                        <p
                          style={{
                            margin: " 0",
                            fontSize: "15px",
                            color: "#666",
                          }}
                        >
                          {tab.desc}
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tab Content */}
          <div className="col-lg-8">
            <div
              className="tab-content"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {tabs.map((tab, i) => (
                <div
                  className={`tab-pane fade ${i === 0 ? "show active" : ""}`}
                  id={tab.id}
                  role="tabpanel"
                  key={tab.id}
                >
                  <div className="content-box ps-4">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <h3
                          className="underLine"
                          style={{
                            fontWeight: "600",
                            marginBottom: "25px",
                            position: "relative",
                          }}
                        >
                          {tab.content.heading}
                        </h3>
                        {tab.content.paragraphs.map((text, idx) => (
                          <p
                            key={idx}
                            style={{
                              borderRadius: "10px",
                              padding: "10px",
                              fontSize: "14px",
                              letterSpacing: "0.1rem",
                              fontStyle: idx === 1 ? "italic" : "normal",
                              fontWeight: idx === 1 ? "600" : "normal",
                              backgroundColor:
                                idx === 1 ? "rgb(19, 28, 42)" : "transparent",
                              color:
                                idx === 1 ? "rgb(102, 102, 102)" : undefined,
                            }}
                          >
                            {text}
                          </p>
                        ))}
                        <ul
                          className="list-unstyled"
                          style={{ paddingLeft: "0" }}
                        >
                          {tab.content.features.map((item, j) => (
                            <li
                              key={j}
                              style={{ marginBottom: "8px", fontSize: "17px" }}
                            >
                              <i
                                className="bi bi-check2-circle"
                                style={{
                                  color: " #10a3d7",
                                  marginRight: "15px",
                                  fontSize: "22px",
                                }}
                              ></i>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <div className="image-box">
                          <img
                            src={tab.content.image}
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

      {/* alt section in alt  */}
      <div className="container mt-5" data-aos="fade-up" data-aos-delay="100">
        <div
          className="cta-wrapper"
          style={{
            
            position: "relative",
            padding: "0",
            overflow:"hidden",
            borderRadius: "15px",
          }}
        >
          {/* Background shapes */}
          {/* <div className="cta-shapes">
            <div
              className="shape shape-1"
              style={{
                position: "absolute",
                top: "40%",
                left: "-70px",
                width: "140px",
                height: "140px",
                backgroundColor: "#1f2735",
                borderRadius: "50%",
                zIndex:"0"
              }}
            ></div>
            <div
              className="shape shape-2"
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                width: "80px",
                height: "80px",
                backgroundColor: "#e2e3e5",
                borderRadius: "50%",
              }}
            ></div>
            <div
              className="shape shape-3"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100px",
                height: "100px",
                backgroundColor: "#e9ecef",
                borderRadius: "50%",
                opacity: 0.2,
              }}
            ></div>
          </div> */}

          <div className="row g-0">
            {/* Left Column */}
            <div className="col-lg-7">
              <div
                className="cta-content p-5"
                data-aos="fade-right"
                data-aos-delay="200"
                style={{
                    position:"relative",
                    zIndex:"1",
                    backgroundColor:"#131825",
                }}
              >
                <span
                  className="badge-custom"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  style={{
                    display: "inline-block",
                    padding: "5px 12px",
                    backgroundColor: "color-mix(in srgb, var(--heading-color), transparent 95%)",
                    color: "#10a3d7",
                    borderRadius: "5px",
                    fontWeight: "600",
                    fontSize: "19px",
                    marginBottom: "10px"
                  }}
                >
                  Premium Offer
                </span>

                <h1
                  className="mt-4 mb-4"
                  style={{ fontWeight: "600", fontSize: "3rem" }}
                >
                  Transform Your Experience With Our Solution
                </h1>

                <p className="mb-4" style={{ fontSize: "1.1rem", color: "rgb(255 255 255 / 73%)" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>

                <div className="row benefits-row mb-5">
                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="benefit-item d-flex align-items-start mb-4">
                      <div
                        className="icon-box me-3"
                        style={{ fontSize: "1.5rem", color: "#fff",backgroundColor:"#10a3d7",padding:"10px",borderRadius:"10px",
                        width:"50px",
                    height:"50px" }}
                      >
                        <i className="bi bi-lightning-charge-fill"></i>
                      </div>
                      <div className="benefit-content">
                        <h5 style={{ fontWeight: "600", fontSize: "1rem" }}>
                          Quick Setup
                        </h5>
                        <p style={{ fontSize: "0.9rem", color: "rgb(255 255 255 / 73%)" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="benefit-item d-flex align-items-start mb-4">
                      <div
                        className="icon-box me-3"
                        style={{ fontSize: "1.5rem", color: "#fff",backgroundColor:"#10a3d7",padding:"10px",borderRadius:"10px",
                    width:"50px",
                height:"50px" }}
                      >
                        <i className="bi bi-shield-check"></i>
                      </div>
                      <div className="benefit-content">
                        <h5 style={{ fontWeight: "600", fontSize: "1rem" }}>
                          Full Security
                        </h5>
                        <p style={{ fontSize: "0.9rem", color: "rgb(255 255 255 / 73%)" }}>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="action-buttons d-flex align-items-center flex-wrap gap-3">
                  <a
                    href="#"
                    className="btn "
                    data-aos="fade-up"
                    data-aos-delay="600"
                    style={{
                        backgroundColor:"#10a3d7",
                        color:"#fff",
                      padding: "0.6rem 1.5rem",
                      fontSize: "1rem",
                      borderRadius: "50px",
                    }}
                  >
                    Start Now
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-secondary"
                    data-aos="fade-up"
                    data-aos-delay="700"
                    style={{
                        color:"#fff",
                      padding: "0.6rem 1.5rem",
                      fontSize: "1rem",
                      borderRadius: "50px",
                    }}
                  >
                    Learn More
                  </a>
                  <div
                    className="guarantee-badge d-flex align-items-center"
                    data-aos="fade-up"
                    data-aos-delay="800"
                    style={{
                      marginLeft: "1rem",
                      fontSize: "1rem",
                      color: "#198754",
                      fontWeight: "500",
                    }}
                  >
                    <i className="bi bi-patch-check-fill me-2"></i>
                    <span>30-Day Money Back</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-5 position-relative "
            style={{
                backgroundColor:"#131f2e"
            }}>
                <div
                  className="floating-element element-1"
                  style={{
                    position: "absolute",
                    top: "20%",
                    left: "0",
                    backgroundColor: "#131825",
                    padding: "0.5rem 1rem",
                    borderRadius: "50px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.85rem",
                  }}
                >
                  <i
                    className="bi bi-star-fill"
                    style={{ color: "#ffc107" }}
                  ></i>
                  <span>4.9 Rating</span>

                  
                </div>
                <div
                  className="floating-element element-2"
                  style={{
                    position: "absolute",
                    bottom: "15%",
                    right: "0",
                    backgroundColor: "#131825",
                    padding: "0.5rem 1rem",
                    borderRadius: "50px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "1rem",
                  }}
                >
                  <i
                    className="bi bi-people-fill"
                    style={{ color: "#0d6efd" }}
                  ></i>
                  <span>10k+ Users</span>
                </div>
                <div className="test d-flex align-items-center justify-content-center" style={{
                    width:"100%",
                    height:"100%"
                }}>
              <div
                className="cta-image-container  text-center"
                data-aos="zoom-in"
                data-aos-delay="300"
                
              >
                <img
                  src={altsection}
                  alt="Illustration"
                  className="img-fluid main-image"
                  style={{ borderRadius: "12px", maxHeight: "250px",objectFit:"center",

                 }}
                />
                <div
                  className="pattern-dots"
                //   style={{
                //     position: "absolute",
                //     bottom: "-20%",
                //     left: "0",
                //     width: "170px",
                //     height: "170px",
                //     backgroundImage: "radial-gradient( #10a3d7 10%, transparent 3px)",
                //     backgroundSize: "15px 15px",
                //     transform: "translate(-50%, -50%)",
                //     opacity: 0.4,
                //     zIndex: -1,
                //   }}
                ></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturTabsSection;
