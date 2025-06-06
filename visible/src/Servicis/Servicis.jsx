import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

function SiteServisic() {
    useEffect(() => {
        AOS.init({ once: true });
      }, []);
     
  return (
    <section id='Servicis'>
      <div className="container">
        <div className="row">
          {/* left Column - Content */}
          <div className="col-lg-9" data-aos="fade-up" data-aos-delay="200">
            <div className="about-content ps-lg-4  ">
              <div
                className="tag-badge"
                data-aos="fade-up"
                data-aos-delay="100"
                style={{
                  display: "inline-block",
                  padding: "5px 12px",
                  backgroundColor:
                    "color-mix(in srgb, var(--heading-color), transparent 95%)",
                  color: "#10a3d7",
                  borderRadius: "5px",
                  fontWeight: "600",
                  fontSize: "14px",
                  marginBottom: "10px",
                }}
              >
                COMPANY OVERVIEW
              </div>

              <h1
                className="my-3 fw-bold "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Discover our journey and future aspirations towards innovation
                and success
              </h1>

              <div
                className="about-info"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <p
                  style={{
                    lineHeight: "30px",
                  }}
                >
                  Explore how we have developed our unique approach to tackle
                  complex challenges and provide exceptional service across
                  various industries. Our dedicated team works tirelessly to
                  ensure client satisfaction.
                </p>
                <p
                  style={{
                    lineHeight: "30px",
                  }}
                >
                  Through continuous learning and adaptation, we strive to stay
                  at the forefront of technology and market trends,imperdiet.
                  Proin condimentum fermentum ex, vitae malesuada risus
                  scelerisque eu. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia curae; Donec gravida
                  vestibulum ante, eget faucibus magna pulvinar vel. Cras
                  consectetur ornare lectus, nec volutpat enim accumsan vel.
                  Fusce facilisis sagittis purus, non malesuada augue dignissim
                  ut. Integer scelerisque nibh quis diam pharetra, id
                  ullamcorper ligula finibus. ensuring our solutions are always
                  relevant and effective.
                </p>
              </div>
            </div>
          </div>

          {/* rghit Column - Content */}
          <div class="col-lg-3" data-aos="fade-left">
            <div
              class="services-stats"
             style={{
      padding:" 20px",
      borderRadius:" 12px",
      boxShadow:" 0 -15px 40px rgba(16, 163, 215, 0.3)",
      display: "flex",
    flexDirection:" column",
    gap:" 25px",
             }}
            >
              <div className="stat-item">
                <h1 className="stat-number fw-bold">500+</h1>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <h1 className="stat-number fw-bold">98%</h1>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <h1 className="stat-number fw-bold">15+</h1>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* start cervisic card  */}
      <div className="container cervisic-card my-5">
      <div className="row g-4">
  {/* Service 1 */}
  <div className="col-lg-3 col-md-6">
    <div className="card h-100" >
      <div className="card-body" data-aos="fade-left" data-aos-delay="100">
        <div style={{ marginBottom: "1rem", color: "#0d6efd", fontSize: "2rem" }}>
          <i className="fas fa-lightbulb"></i>
        </div>
        <h4 className="card-title"
        style={{
            color:"#fff"
        }}
        >Strategy Development</h4>
        <p className="card-text"
        style={{
            color:"#fffdfdc6"
        }}>
          Develop comprehensive business strategies aligned with your vision, market dynamics, and organizational capabilities to drive sustainable growth.
        </p>
      </div>
    </div>
  </div>

  {/* Service 2 */}
  <div className="col-lg-3 col-md-6">
    <div className="card h-100" >
      <div className="card-body" data-aos="fade-left" data-aos-delay="200">
        <div style={{ marginBottom: "1rem", color: "#198754", fontSize: "2rem" }}>
          <i className="fas fa-chart-bar"></i>
        </div>
        <h4 className="card-title"
        style={{
            color:"#fff"
        }}
        >Performance Optimization</h4>
        <p className="card-text"
         style={{
            color:"#fffdfdc6"
        }}>
          Identify operational inefficiencies and implement targeted improvements to enhance productivity, reduce costs, and maximize business performance.
        </p>
      </div>
    </div>
  </div>

  {/* Service 3 */}
  <div className="col-lg-3 col-md-6">
    <div className="card h-100" >
      <div className="card-body" data-aos="fade-right" data-aos-delay="100">
        <div style={{ marginBottom: "1rem", color: "#ffc107", fontSize: "2rem" }}>
          <i className="fas fa-users"></i>
        </div>
        <h4 className="card-title"
        style={{
            color:"#fff"
        }}
        >Organizational Development</h4>
        <p className="card-text"
         style={{
            color:"#fffdfdc6"
        }}>
          Build high-performing teams and effective organizational structures that foster innovation, collaboration, and adaptability in changing markets.
        </p>
      </div>
    </div>
  </div>

  {/* Service 4 */}
  <div className="col-lg-3 col-md-6" >
    <div className="card h-100">
      <div className="card-body" data-aos="fade-right" data-aos-delay="200">
        <div style={{ marginBottom: "1rem", color: "#dc3545", fontSize: "2rem" }}>
          <i className="fas fa-chart-line"></i>
        </div>
        <h4 className="card-title"
        style={{
            color:"#fff"
        }}
        >Market Expansion</h4>
        <p className="card-text"
         style={{
            color:"#fffdfdc6"
        }}>
          Identify and capitalize on new market opportunities through data-driven analysis, competitive intelligence, and strategic entry planning.
        </p>
      </div>
    </div>
  </div>
</div>
</div>
    </section>
  );
}

export default SiteServisic;
