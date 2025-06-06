function PricingSection() {
  return (
    <section id="Pricing">
      {/* section heading  */}
      <div
        className="container text-center section-title py-4 mb-5"
        data-aos="fade-up"
      >
        <span className="description-title">Pricing</span>
        <h2>Pricing</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* section heading end  */}

      <div className="container mt-5" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          {/* Standard Plan */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              className="text-center p-4 rounded shadow"
              style={{ backgroundColor: "#131e2c" }}
            >
              <div className="mb-4">
                <i
                  className="bi bi-star"
                  style={{ fontSize: "2rem", color: "#10a3d7" }}
                ></i>
              </div>
              <h3 style={{ fontWeight: 600 }}>Standard</h3>
              <div
                className="mb-3"
                style={{ fontSize: "24px", fontWeight: "bold" }}
              >
                <span style={{
                    color:"#10a3d7"
                }}>$9</span>
                <span className="text fs-5 ms-2" style={{ color: "#6c757d" }}>
                  /month
                </span>
              </div>
              <p style={{ color: "#6c757d" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor.
              </p>
              <ul className="list-unstyled text-start mt-3 mb-4">
                <li>
                  <i className="bi bi-check2 text-success me-2"></i> Vestibulum
                  ante ipsum primis
                </li>
                <li  className=" my-3">
                  <i className="bi bi-check2 text-success me-2"></i> Fusce
                  vulputate eleifend
                </li>
                <li>
                  <i className="bi bi-check2 text-success me-2"></i> Nullam ac
                  tortor vitae
                </li>
              </ul>
              <a href="#" className="btn " style={{
                    color:"#fff",
                    backgroundColor:"#10a3d7"
                }}>
                Buy Now
              </a>
            </div>
          </div>

          {/* Professional Plan */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              className="text-center p-4 rounded shadow position-relative"
              style={{ backgroundColor: "#131e2c" }}
            >
              <span
                className="position-absolute top-0 start-50 translate-middle badge bg-success px-3 py-2"
                style={{ fontSize: "0.8rem" }}
              >
                Recommended
              </span>
              <div className="mb-3 mt-2
              ">
                <i
                  className="bi bi-stars"
                  style={{ fontSize: "2rem", color: "#10a3d7" }}
                ></i>
              </div>
              <h3 style={{ fontWeight: 600 }}>Professional</h3>
              <div
                className="mb-3"
                style={{ fontSize: "24px", fontWeight: "bold" }}
              >
                <span style={{color:"#10a3d7"}}>$29</span>
                <span 
                className="text fs-5 ms-2" style={{ color: "#6c757d" }}>/month</span>
              </div>
              <p style={{ color: "#6c757d" }}>
                Maecenas tempus tellus eget condimentum rhoncus semper.
              </p>
              <ul className="list-unstyled text-start mt-3 mb-3">
                <li>
                  <i className="bi bi-check2 text-success me-2"></i> Donec quam
                  felis ultricies
                </li>
                <li className=" my-3">
                  <i className="bi bi-check2 text-success me-2"></i> Aenean
                  massa imperdiet
                </li>
                <li>
                  <i className="bi bi-check2 text-success me-2"></i> Cras
                  dapibus vivamus
                </li>
              </ul>
              <a href="#" className="btn btn-success mt-2">
                Buy Now
              </a>
            </div>
          </div>

          {/* Ultimate Plan */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div
              className="text-center p-4 rounded shadow"
              style={{ backgroundColor: "#131e2c" }}
            >
              <div className="mb-4">
                <i
                  className="bi bi-star-fill"
                  style={{ fontSize: "2rem", color: "#10a3d7" }}
                ></i>
              </div>
              <h3 style={{ fontWeight: 600 }}>Ultimate</h3>
              <div
                className="mb-3"
                style={{ fontSize: "24px", fontWeight: "bold" }}
              >
                <span style={{
                    color:"#10a3d7"
                }}>$49</span>
                <span className="text fs-5 ms-2" style={{ color: "#6c757d" }}
                >/month</span>
              </div>
              <p style={{ color: "#6c757d" }}>
                Etiam rhoncus maecenas tempus tellus eget condimentum.
              </p>
              <ul className="list-unstyled text-start mt-3 mb-4">
                <li>
                  <i className="bi bi-check2 text-success me-2"></i> Phasellus
                  viverra nulla
                </li>
                <li className=" my-3">
                  <i className="bi bi-check2 text-success me-2"></i> Quisque
                  rutrum aenean
                </li>
                <li>
                  <i className="bi bi-check2 text-success me-2"></i> Etiam
                  ultricies nisi vel
                </li>
              </ul>
              <a href="#" className="btn " style={{
                    color:"#fff",
                    backgroundColor:"#10a3d7"
                }}>
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
