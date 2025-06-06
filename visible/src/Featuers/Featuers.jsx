import React from "react";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faClock,
  faLock,
  faCloudUploadAlt,
  faDatabase,
  faMicrochip,
  faCogs,
  faChartBar,
  faArrowUp,
  faCheckCircle,
  faSyncAlt,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
function SiteFeatuer() {
  return (
    <section id="Featherer">
      <div
        className="container text-center section-title py-4"
        data-aos="fade-up"
      >
        <span className="description-title">Features</span>
        <h2>Features</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* start feature content  */}
      <div
        className="container"
        style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-md-6">
            {/* right col ---- */}
            <div
              style={{ marginBottom: "3rem" }}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h1 style={{ fontWeight: "bold", marginBottom: "25px" }}>
                Integrated Business Framework
              </h1>
              <p style={{ marginBottom: "0.9rem", color: "#e4edf585" }}>
                Empower your enterprise with a unified technology backbone,
                engineered for performance and adaptability.
              </p>
              <p style={{ marginBottom: "0.9rem", color: "#e4edf585" }}>
                Ensure seamless coordination across departments, reducing
                inefficiencies and boosting outcomes.
              </p>
              <p style={{ marginBottom: "0.9rem", color: "#e4edf585" }}>
                Leverage real-time insights with dynamic analytics for informed
                decision-making and strategic agility.
              </p>
              <p style={{ marginBottom: 0, color: "#e4edf585" }}>
                Confidently scale operations with an infrastructure that evolves
                alongside your business goals.
              </p>

              <div className="d-flex" style={{ marginTop: "2.5rem" }}>
                <div className="col-md-6 d-flex align-items-center mb-3">
                  <FontAwesomeIcon
                    icon={faShieldAlt}
                    style={{
                      marginRight: "1rem",
                      fontSize: "3.2rem",
                      color: "#10a3d7",
                    }}
                  />
                  <div>
                    <h1 style={{ display: "block" }}>95%</h1>
                    <span>Client Retention</span>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center mb-3">
                  <FontAwesomeIcon
                    icon={faClock}
                    style={{
                      marginRight: "1rem",
                      fontSize: "3.2rem",
                      color: "#10a3d7",
                    }}
                  />
                  <div>
                    <h1 style={{ display: "block" }}>24/7</h1>
                    <span>Global Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right col -------- */}
          <div className="col-md-6">
            <div data-aos="fade-left" data-aos-delay="300">
              <div className="row g-4">
                <div
                  className="col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div
                    style={{
                        backgroundColor:"rgb(19 28 42)",
                        borderLeft: "4px solid rgb(25 135 82 / 56%)",
                      padding: "1.5rem",
                      borderRadius: "15px",
                      height: "100%",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faLock}
                      style={{
                        marginBottom: "0.5rem",
                        fontSize: "1.5rem",
                        color: "#198754",
                      }}
                    />
                    <h3 style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                      Enterprise-Grade Security
                    </h3>
                    <p>
                      Protect core assets with advanced encryption and proactive
                      threat monitoring.
                    </p>
                    <div style={{
                        backgroundColor:"rgb(25 135 82 / 56%)",
                        color:"#fff",
                        padding:"5px 10px",
                        borderRadius:"10px",
                        width:"80%",
                    }}>
                      <span style={{ color: "#198754", marginRight: "0.5rem" }}>
                        ●
                      </span>{" "}
                      Deployed
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div
                    style={{
                        borderLeft: "4px solid rgb(255 193 7 / 56%)",
                      padding: "1.5rem",
                      borderRadius: "0.375rem",
                      height: "100%",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCloudUploadAlt}
                      style={{
                        marginBottom: "0.5rem",
                        fontSize: "1.5rem",
                        color: "#ffc107",
                      }}
                    />
                    <h3 style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                      Cloud-First Operations
                    </h3>
                    <p>
                      Seamlessly adopt cloud-native solutions for flexibility
                      and speed.
                    </p>
                    <div
                    style={{
                        backgroundColor:"rgb(255 193 7 / 56%)",
                        color:"#fff",
                        padding:"5px 10px",
                        borderRadius:"10px",
                        width:"70%",
                    }}>
                      <span style={{ color: "#ffc107", marginRight: "0.5rem" }}>
                        ●
                      </span>{" "}
                      In Development
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4 mt-4">
                <div
                  className="col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div
                    style={{
                        borderLeft: "4px solid rgb(13 202 240 / 50%)",
                      padding: "1.5rem",
                      borderRadius: "0.375rem",
                      height: "100%",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faDatabase}
                      style={{
                        marginBottom: "0.5rem",
                        fontSize: "1.5rem",
                        color: "#0dcaf0",
                      }}
                    />
                    <h3 style={{ fontWeight: "bold", fontSize: "1.25rem",marginBottom:"15px" }}>
                      Centralized Data Integrity
                    </h3>
                    <p>
                      Maintain compliance while ensuring reliable, accessible
                      data.
                    </p>
                    <div
                    style={{
                        backgroundColor:"rgb(13 202 240 / 50%)",
                        color:"#fff",
                        padding:"5px 10px",
                        borderRadius:"10px",
                        width:"70%",
                    }}>
                      <span style={{ color: "rgb(13 202 240)", marginRight: "0.5rem" }}>
                        ●
                      </span>{" "}
                      Operational
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  <div
                    style={{
                        backgroundColor:"rgb(19 28 42)",
                      borderLeft: "4px solid rgb(13 110 253 / 53%)",
                      padding: "1.5rem",
                      borderRadius: "0.375rem",
                      height: "100%",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faMicrochip}
                      style={{
                        marginBottom: "0.5rem",
                        fontSize: "1.5rem",
                        color: "#0d6efd",
                      }}
                    />
                    <h3 style={{ fontWeight: "bold", fontSize: "1.25rem", marginBottom:"15px" }}>
                      Next-Level Automation
                    </h3>
                    <p>
                      Utilize AI-driven systems to streamline tasks and optimize
                      performance.
                    </p>
                    <div
                    style={{
                        backgroundColor:"rgb(13 110 253 / 53%)",
                        color:"#fff",
                        padding:"5px 10px",
                        borderRadius:"10px",
                        width:"70%",
                    }}>
                      <span style={{ color: "#0d6efd", marginRight: "0.5rem" }}>
                        ●
                      </span>{" "}
                      Scheduled
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BOTOM ROW   */}
        <div className="row g-4 mt-5" data-aos="fade-up" data-aos-delay="100">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="hover-up"
              style={{
                // border: "1px solid #dee2e6",
                backgroundColor:"rgb(19 28 42)",
                padding: "1.5rem",
                borderRadius: "15px",
                height: "100%",
              }}
            >
              <FontAwesomeIcon
                icon={faCogs}
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "2rem",
                  color: "#10a3d7",
                }}
              />
              <h3 style={{ fontWeight: "600",margin:"15px 0"}}>Adaptive Workflows</h3>
              <p>
                Streamline operations through agile process redesign and
                intelligent routing.
              </p>
              <div>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ marginRight: "0.5rem", color: "#198754" }}
                />{" "}
                Active
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div
            className="hover-up"
              style={{
                backgroundColor:"rgb(19 28 42)",
                padding: "1.5rem",
                borderRadius: "15px",
                height: "100%",
              }}
            >
              <FontAwesomeIcon
                icon={faChartBar}
                style={{
                    marginBottom: "0.5rem",
                    fontSize: "2rem",
                    color: "#10a3d7",
                }}
              />
              <h3 style={{ fontWeight: "600 ",margin:"15px 0"}}>Insight-Driven KPIs</h3>
              <p>
                Visualize metrics with intuitive dashboards for actionable
                outcomes.
              </p>
              <div>
                <FontAwesomeIcon
                  icon={faSyncAlt}
                  style={{ marginRight: "0.5rem", color: "#ffc107" }}
                />{" "}
                Pending
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div
            className="hover-up"
              style={{
                backgroundColor:"rgb(19 28 42)",
                padding: "1.5rem",
                borderRadius: "15px",
                height: "100%",
              }}
            >
              <FontAwesomeIcon
                icon={faArrowUp}
                style={{
                    marginBottom: "0.5rem",
                    fontSize: "2rem",
                    color: "#10a3d7",
                }}
              />
              <h3 style={{ fontWeight: "600 ",margin:"15px 0"}}>Growth Enablement</h3>
              <p>
                Accelerate business value through strategic and data-aligned
                expansion.
              </p>
              <div>
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  style={{ marginRight: "0.5rem", color: "#0dcaf0" }}
                />{" "}
                Planned
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tabs section start ------ */}
     
    </section>
  );
}
export default SiteFeatuer;
