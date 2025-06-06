// import React from "react";
import React, { useEffect, useState } from 'react';

const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer id="footer" className="mt-5 py-5 ">
      <div className="container mb-4 border-top pt-5">
        <div className="row gy-4">
          {/* About */}
          <div className="col-lg-5 col-md-12">
            <a href="/" className="d-inline-block mb-3 text-decoration-none">
              <span className="fw-bold fs-4 text-light">Visible</span>
            </a>
            <p
              style={{
                color: "#838a94",
              }}
            >
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
              nada terra videa magna derita valies darta donna mare fermentum
              iaculis eu non diam phasellus.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" aria-label="Twitter" style={{ color: "#2a9ecd" }}>
                <i className="bi bi-twitter-x fs-5"></i>
              </a>
              <a href="#" aria-label="Facebook" style={{ color: "#2a9ecd" }}>
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" aria-label="Instagram" style={{ color: "#2a9ecd" }}>
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" aria-label="LinkedIn" style={{ color: "#2a9ecd" }}>
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2 col-6">
            <h5 className="fw-bold mb-3">Useful Links</h5>
            <ul className="list-unstyled">
              {[
                "Home",
                "About us",
                "Services",
                "Terms of service",
                "Privacy policy",
              ].map((item, i) => (
                <li key={i} className="mb-2">
                  <a
                    href="#"
                    className=" text-decoration-none"
                    style={{
                      color: "#838a94",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-lg-2 col-6">
            <h5 className="fw-bold mb-3">Our Services</h5>
            <ul className="list-unstyled">
              {[
                "Web Design",
                "Web Development",
                "Product Management",
                "Marketing",
                "Graphic Design",
              ].map((service, i) => (
                <li key={i} className="mb-2">
                  <a
                    href="#"
                    className=" text-decoration-none"
                    style={{
                      color: "#838a94",
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-12">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p
              className="mb-1"
              style={{
                color: "#838a94",
              }}
            >
              A108 Adam Street
            </p>
            <p
              className="mb-1"
              style={{
                color: "#838a94",
              }}
            >
              New York, NY 535022
            </p>
            <p
              className="mb-3"
              style={{
                color: "#838a94",
              }}
            >
              United States
            </p>
            <p
              className="mb-1"
              style={{
                color: "#838a94",
              }}
            >
              <strong
                style={{
                  color: "#838a94",
                }}
              >
                Phone:
              </strong>
              +1 5589 55488 55
            </p>
            <p
              style={{
                color: "#838a94",
              }}
            >
              <strong>Email:</strong>
              info@example.com
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container text-center border-top pt-5  small">
        <p>
          © <strong>Visible</strong> All Rights Reserved
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://bootstrapmade.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            mahmud
          </a>
        </p>
      </div>
      <a
      onClick={scrollToTop}
        href="#"
        id="scroll-top"
        // class="scroll-top d-flex align-items-center justify-content-center active "
        style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '40px',
            height: '40px',
            backgroundColor: '#10a3d7',
            color: '#fff',
            borderRadius: '50%',
            display: isVisible ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            zIndex: 999,
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
            cursor: 'pointer',
            transition: 'opacity 0.3s ease-in-out',
          }}
    >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </footer>
  );
};

export default Footer;
