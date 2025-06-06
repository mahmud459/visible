// About section 
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import About from '../assets/Hom1ImgFail/about-8.webp'
function AboutSite (){
    useEffect(() => {
        AOS.init({ once: true });
      }, []);
    return(
        <section id="About" 
        style={{
            backgroundColor:"#111623",
            padding: "60px 0",
        }}>
        {/* Section Title */}
        <div className="container text-center section-title mb-5" data-aos="fade-up" >
          <span className="description-title">
            About</span>
          <h2>ABOUT</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center gy-5">
            {/* Left Column - Image and Mission Card */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="about-image-wrapper position-relative">
                <img
                  src={About}
                  alt="About Us"
                  className="img-fluid rounded-4"
                />
                <div className="mission-card d-flex " style={{
                  position: "absolute",
                  bottom:"-30px",
                  left: "0",
                  right:"0",
                  margin:"0 auto",
                  backgroundColor: "var(--nav-hover-color)",
                  padding: "15px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  width: "90%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <div className="mission-icon d-flex me-3" 
                  style={{
                     fontSize: "40px",
                      color: "#0d6efd" ,
                     flexShrink: "0",
                     width: "60px",
                     height: "60px",
                     borderRadius: "50%",
                     backgroundColor: 
                  "color-mix(in srgb, var(--heading-color), transparent 85%)",
                     alignItems: "center",
                     justifyContent: "center",
                 
                     }}>
                    <i className="bi bi-lightbulb"></i>
                  </div>
                  <div className="mission-content">
                    <h4>Our Purpose</h4>
                    <p>Focus on delivering creative solutions that empower businesses to grow and succeed.</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right Column - Content */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="about-content ps-lg-4">
                <div
                  className="tag-badge"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    display: "inline-block",
                    padding: "5px 12px",
                    backgroundColor: "color-mix(in srgb, var(--heading-color), transparent 95%)",
                    color: "#10a3d7",
                    borderRadius: "5px",
                    fontWeight: "600",
                    fontSize: "14px",
                    marginBottom: "10px"
                  }}
                >
                  COMPANY OVERVIEW
                </div>
  
                <h2 className="mb-4" data-aos="fade-up" data-aos-delay="200">
                  Discover our journey and future aspirations towards innovation and success
                </h2>
  
                <div className="about-info" data-aos="fade-up" data-aos-delay="300">
                  <p>
                    Explore how we have developed our unique approach to tackle complex challenges and provide
                    exceptional service across various industries. Our dedicated team works tirelessly to ensure
                    client satisfaction.
                  </p>
                  <p>
                    Through continuous learning and adaptation, we strive to stay at the forefront of technology
                    and market trends, ensuring our solutions are always relevant and effective.
                  </p>
                </div>
  
                <h4 className="values-title mt-4 mb-3" data-aos="fade-up" data-aos-delay="400">
                  Fundamental Principles
                </h4>
  
                <div className="values-list d-flex flex-wrap " data-aos="fade-up" data-aos-delay="500">
                  {[
                    "Trustworthiness",
                    "Quality",
                    "Creativity",
                    "Response",
                    "Collaboration",
                    "Growth Mindset",
                  ].map((value, idx) => (
                    <div className="value-item d-flex align-items-center m-1  " key={idx}
                    style={{
                            backgroundColor: 
                         "color-mix(in srgb, var(--background-color), var(--default-color) 12%)",
                            padding:" 0.75rem 1.25rem",
                            borderRadius:" 50px",
                            transition:" all 0.3s ease",
                            overflow:"hidden"
                    }}>
                      <div className="value-icon mx-2 d-flex align-items-center" 
                      style={{
                        
                        color: "#fff",
                        height:"20px",
                        width:"20px",
                         fontSize: "20px",
                         backgroundColor:"#10a3d7",
                         borderRadius:"50%"
                         , }}>
                        <i className="bi bi-check2" 
                        ></i>
                      </div>
                      <span className="value-text">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
};

export default AboutSite ;