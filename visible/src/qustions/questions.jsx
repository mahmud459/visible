import allostr5 from "../assets/Hom1ImgFail/illustration-5.webp";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQSection = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="faq" className="faq section">
      {/* section heading  */}
      <div
        className="container text-center section-title py-4 mb-5"
        data-aos="fade-up"
      >
        <span className="description-title">Frequently Asked Questions</span>
        <h2>Frequently Asked Questions</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* section heading end  */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-start gy-4 gx-5">
          {/* Sidebar */}
          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="200">
            <div className="faq-sidebar">
              <div className="faq-image mb-3">
                <img
                  src={allostr5}
                  alt="FAQ"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
              <div
                className="contact-box p-4  shadow-sm"
                style={{
                  backgroundColor: "#131e2c",
                  borderRadius:"10px"
                }}
              >
                <h5>
                  <i
                    className="bi bi-headset me-2"
                    style={{ fontSize: "2rem", color: "#10a3d7" }}
                  ></i>
                  Need Assistance?
                </h5>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#a3a3aa",
                    marginBottom: "1rem",
                  }}
                >
                  Donec rutrum congue leo eget malesuada. Quisque velit nisi,
                  pretium ut lacinia in, elementum id enim.
                </p>
                <a
                  href="#"
                  class="btn aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  style={{
                    backgroundColor: "rgb(16, 163, 215)",
                    color: "rgb(255, 255, 255)",
                    padding: "0.6rem 1.5rem",
                    fontSize: "1rem",
                    borderRadius: " 50px",
                  }}
                >
                  Connect with Support
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Tabs */}
          <div className="col-lg-7">
  <div className="faq-tabs">
    {/* Nav Tabs */}
    <ul className="nav nav-pills mb-4" id="faqTabs" role="tablist" style={{
        borderBottom:" 15px solid transparent", 
        backgroundImage:" linear-gradient(to right, transparent, #cdd8f4e3, transparent)", 
        backgroundPosition: "bottom", 
        backgroundSize: "100% 2px",
        backgroundRepeat:" no-repeat", 
        padding: "15px",
    }}>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link active"
          id="general-tab"
          data-bs-toggle="pill"
          data-bs-target="#general"
          type="button"
          role="tab"
          aria-controls="general"
          aria-selected="true"
        >
          General Inquiries
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="account-tab"
          data-bs-toggle="pill"
          data-bs-target="#account"
          type="button"
          role="tab"
          aria-controls="account"
          aria-selected="false"
        >
          Account Services
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="payment-tab"
          data-bs-toggle="pill"
          data-bs-target="#payment"
          type="button"
          role="tab"
          aria-controls="payment"
          aria-selected="false"
        >
          Billing & Payments
        </button>
      </li>
    </ul>

    {/* Tab Content */}
    <div className="tab-content" id="faqTabsContent">
      {/* General Inquiries */}
      <div className="tab-pane fade show active" id="general" role="tabpanel">
        <div className="accordion" id="generalAccordion">
          {[
            "How do I create a new account?",
            "What are the system requirements?",
            "Can I access my data offline?",
          ].map((question, index) => (
            <div className="accordion-item" key={`g-${index}`}>
              <h2 className="accordion-header" id={`g-heading-${index}`}>
                <button
                  className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#g-collapse-${index}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`g-collapse-${index}`}
                >
                  {question}
                </button>
              </h2>
              <div
                id={`g-collapse-${index}`}
                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                data-bs-parent="#generalAccordion"
              >
                <div className="accordion-body">
                  <p style={{ fontSize: "15px" }}>
                    This is a sample answer for: <strong>{question}</strong>.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Account Services */}
      <div className="tab-pane fade" id="account" role="tabpanel">
        <div className="accordion" id="accountAccordion">
          {[
            "How do I reset my password?",
            "How to update account information?",
          ].map((question, index) => (
            <div className="accordion-item" key={`a-${index}`}>
              <h2 className="accordion-header" id={`a-heading-${index}`}>
                <button
                  className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#a-collapse-${index}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`a-collapse-${index}`}
                >
                  {question}
                </button>
              </h2>
              <div
                id={`a-collapse-${index}`}
                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                data-bs-parent="#accountAccordion"
              >
                <div className="accordion-body">
                  <p style={{ fontSize: "15px" }}>
                    This is a sample answer for: <strong>{question}</strong>.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Billing & Payments */}
      <div className="tab-pane fade" id="payment" role="tabpanel">
        <div className="accordion" id="paymentAccordion">
          {[
            "What payment methods are accepted?",
            "When will my payment be processed?",
            "Can I get a refund for my purchase?",
          ].map((question, index) => (
            <div className="accordion-item" key={`p-${index}`}>
              <h2 className="accordion-header" id={`p-heading-${index}`}>
                <button
                  className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#p-collapse-${index}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`p-collapse-${index}`}
                >
                  {question}
                </button>
              </h2>
              <div
                id={`p-collapse-${index}`}
                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                data-bs-parent="#paymentAccordion"
              >
                <div className="accordion-body">
                  <p style={{ fontSize: "15px" }}>
                    This is a sample answer for: <strong>{question}</strong>.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
        </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
