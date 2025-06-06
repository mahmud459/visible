function SiteNavbar (){
    return(
     <section>
        <div className="container-fluid py-2">
            <div className="row">
          <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          style={{
            fontSize: "30px",
            margin: "0",
            fontWeight: "700",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#f2f8fe",
          }}
        >
          visible
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" href="#Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#About">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Servicis">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Featherer">
                Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
                </a>
              </li>

              {/* Main Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a className="dropdown-item" href="#Pricing">
                    Pricing
                    </a>
                  </li>

                  {/* Deep Dropdown */}
                  <li className="dropend">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Deep Dropdown
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item" href="#">
                          deepDropdown
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          dropdown1
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#faq">
                    faq
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
                <div className="col-md-3">
                    <div className="logo">
                        <h1 style={{fontSize:'30px', margin:'0', fontWeight:'700',letterSpacing:'2px', textTransform:'uppercase',color:'#f2f8fe'}}>Visible</h1>
                    </div>
                </div>
            </div>
        </div>
     </section>
    );
};
export default SiteNavbar ;