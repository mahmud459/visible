import React from "react";
import heroImg from '../assets/Hom1ImgFail/misc-square-16.webp'

function HeroSection() {
  return (
    <section
      id="hero"
      className="hero section"
      style={{ padding: "40px 0" }}
    >
      <div className="container">
        <div className="row  justify-content-between align-items-center">
          {/* Left Column */}
          <div
            className="col-lg-5 hero-content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="subtitle" style={{ marginBottom: "10px" }}>
              <span style={{ color: "#f2f8fe", fontWeight: "600",letterSpacing:"4px" }}>
                DESIGN STUDIO
              </span>
            </div>

            <h1
              className="title"
              style={{
                fontSize: "48px",
                fontWeight: "550",
                lineHeight: "1.2",
                marginBottom: "20px",
                fontFamily:"'Abel', sans-serif"
              }}
            >
              INSPIRE{" "}
              <span
                className="highlight"
                style={{ color: "#10a3d7", fontWeight: "700" }}
              >
                THROUGH
              </span>{" "}
              DESIGN
            </h1>

            <div className="description" style={{ marginBottom: "30px" }}>
              <p style={{ fontSize: "16px", color: "rgb(228 237 245 / 66%)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae fermentum risus. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia curae; Proin egestas,
                urna at rhoncus gravida.
              </p>
            </div>

            <div className="hero-buttons" style={{ display: "flex", gap: "15px" }}>
              <a
                href="#services"
                className="btn btn rounded-pill firstBtn "
                style={{
                  backgroundColor: "#10a3d7",
                  color: "#fff",
                  padding: "12px 24px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  fontWeight: "500",
                  position:"relative"
                }}
              >
                Our Services <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a
                href="#portfolio"
                className="btn btn rounded-pill secundBtn"
                style={{
                  color: "#f2f8fe",
                  padding: "12px 24px",
                  textDecoration: "none",
                  fontWeight: "500",
                  position:"relative"
                }}
              >
                View Portfolio
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="col-lg-6 hero-visual "
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              position: "relative",
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            <div className="image-wrapper" style={{ position: "relative" }}>
              <img
                src={heroImg}
                alt="Creative Design"
                className="main-image"
                style={{ width: "100%", }}
              />

              <div
                className="floating-element top-left"
                style={{
                  position: "absolute",
                  width:"60px",
                  height:"60px",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                  borderRadius: "50%",
                  fontSize: "34px",
                  color: "#10a3d7",
                  backgroundColor: 
                  "color-mix(in srgb, var(--surface-color), transparent 40%)",
                     backdropFilter: "blur(10px)",
                }}
              >
                <i class="fa-solid fa-star"></i>
              </div>

              <div
                className="floating-element bottom-right"
                style={{
                    position: "absolute",
                    width:"60px",
                    height:"60px",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    borderRadius: "50%",
                    fontSize: "34px",
                    color: "#10a3d7",
                    backgroundColor: 
                    "color-mix(in srgb, var(--surface-color), transparent 40%)",
                       backdropFilter: "blur(10px)",
                }}
              >
                <i class="fa-solid fa-star"></i>
              </div>

              <div
                className="experience-badge position-absolute "
                style={{
                  left:"5%",
                  bottom:"5%",
                  backgroundColor: 
                  "color-mix(in srgb, var(--surface-color), transparent 40%)",
                     backdropFilter: "blur(10px)",
                  color: "#fff",
                  padding: "8px 10px",
                  borderRadius: "10px",
                  fontWeight: "600",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span className="years" style={{ fontSize: "35px",color:"#10a3d7" }}>
                  10+
                </span>
                <span className="text" style={{ fontSize: "15px",color: "#fff", }}>
                  Years of Experience
                </span>
              </div>
            </div>

            <div
              className="client-counter position-absolute top-0 end-0"
              style={{
                borderRadius:"10px",
                padding:"10px",
                margin: "30px -0",
                color: "#fff",
                backgroundColor: "#070d1a",
              }}
            >
              <div className="counter-number">
                <span style={{
                    fontSize: "35px",
                    fontWeight: "700",
                }}>750+</span>
              </div>
              <div className="counter-text">
                <span style={{
                    fontSize: "16px",
                    fontWeight: "300",
                }}>Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
