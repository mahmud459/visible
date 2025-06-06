import React from "react";

const ContactSection = () => {
  return (
    <section id="contact">
      {/* section heading  */}
      <div className="container text-center section-title " data-aos="fade-up">
        <span className="description-title">contact</span>
        <h2>contact</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* section heading end  */}

      <div className="container mt-5 pt-5">
        <div className="row g-3
        ">
          {/* Contact Info Panel */}
          <div className="col-md-5">
            <div
              className="leftCol position-relative"
              style={{
                backgroundColor: "#1296c9",
                borderRadius: "10px",
                padding: "30px",
                height:"1019px"
              }}
            >
              <div>
                <h3>Contact Information</h3>
                <p className="py-4">
                  Dignissimos deleniti accusamus rerum voluptate. Dignissimos
                  rerum sit maiores reiciendis voluptate inventore ut.
                </p>
              </div>
              <div>
                {/* Info Card */}
                <div className="cardsUp">
                  <div className="infoCard">
                    <div className="content">
                      <div className="icons">
                        <span>
                          <i className="bi-pin-map-fill"></i>
                        </span>
                      </div>
                      <div className="paragrafs">
                        <p className="fw-bold">Our Location</p>
                        <small>4952 Hilltop Dr, Anytown, CA 90210</small>
                      </div>
                    </div>
                  </div>
                  <div className="infoCard">
                    <div className="content">
                      <div className="icons">
                        <span>
                          <i className="bi-envelope-open"></i>
                        </span>
                      </div>
                      <div className="paragrafs">
                        <p className="fw-bold">Email Us</p>
                        <small>info@example.com</small>
                      </div>
                    </div>
                  </div>
                  <div className="infoCard">
                    <div className="content">
                      <div className="icons">
                        <span>
                          <i className="bi-telephone-fill"></i>
                        </span>
                      </div>
                      <div className="paragrafs">
                        <p className="fw-bold">Call Us</p>
                        <small>+1 (555) 123-4567</small>
                      </div>
                    </div>
                  </div>
                  <div className="infoCard">
                    <div className="content">
                      <div className="icons">
                        <span>
                          <i className="bi-clock-history"></i>
                        </span>
                      </div>
                      <div className="paragrafs">
                        <p className="fw-bold">Working Hours</p>
                        <small>Monday-Saturday: 9AM - 7PM</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="position-absolute bottom-0 start-50% mb-4">
                <h5 className="pt-5 pb-3">Follow Us : </h5>
                <div className="botumIcons" >
                  <div className="icon">
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </div>

                  <div className="icon">
                    <a href="#">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                  </div>
                  <div className="icon">
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                  <div className="icon">
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                  <div className="icon">
                    <a href="#">
                      <i className="bi bi-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="col-md-7">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                width="100%"
                height="300px"
                style={{ borderRadius: "15px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>

            <div className="forms mt-5 p-4"
            style={{
                backgroundColor:"#131825",
                borderRadius:"15px"
            }}>
              <h4>Send Us a Message</h4>
              <p style={{
                padding:"30px 0  ",
                color:" #838a94"
              }}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit mauris
                hendrerit faucibus imperdiet nec eget felis.
              </p>

              <form
                method="post"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  style={{
                    width: "100%",
                    padding: "17px 15px",
                    border: "1px solid #838a94",
                    borderRadius: "15px",
                    color:"#838a94"
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  style={{
                    width: "100%",
                    padding: "17px 15px",
                    border: "1px solid #838a94",
                    borderRadius: "15px",
                    color:"#838a94"
                  }}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  style={{
                    width: "100%",
                    padding: "17px 15px",
                    border: "1px solid #838a94",
                    borderRadius: "15px",
                    color:"#838a94"
                  }}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 15px",
                    border: "1px solid #838a94",
                    borderRadius: "15px",
                    height: "150px",
                    resize: "none",
                    backgroundColor:"#131825",
                    color:"#838a94"
                  }}
                ></textarea>
                <button
                  type="submit"
                  style={{
                    padding: "12px",
                    backgroundColor: "#2a9ecd",
                    color: "#fff",
                    border: "none",
                    borderRadius: "15px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Send Message
                  <i
                    className="bi bi-send-fill"
                    style={{ marginLeft: "8px" }}
                  ></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
