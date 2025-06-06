import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from "react";
import { FaSmile, FaBookOpen, FaHeadset, FaUsers } from "react-icons/fa";

function AbotCrds() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  // Example manual counter (can be replaced by a library like react-countup)
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    support: 0,
    workers: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        clients: Math.min(prev.clients + 5, 232),
        projects: Math.min(prev.projects + 10, 521),
        support: Math.min(prev.support + 30, 1463),
        workers: Math.min(prev.workers + 1, 15),
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
    id="stats"
    className="section"
    style={{ background: "#070d1a", padding: "60px 0" }}
  >
    <div className="container">
      <div
        className="row justify-content-center"
      >
        <div className="col-lg-10">
          <div
            className="stats-wrapper d-flex justify-content-around text-center position-relative flex-wrap"
            
          >
            {/* Item 1 */}
            <div className="stats-item" data-aos="fade-left" data-aos-delay="100">
              <div className="d-flex justify-content-center align-items-center"  style={{
                width:"80px",
                height:"80px",
                borderRadius:"50%",
                 fontSize: "50px",
                  color: "#0dcaf0",
                  backgroundColor:"color-mix(in srgb, var(--nav-hover-color), transparent 90%)",

                   }}>
                <FaSmile />
              </div>
              <span style={{ fontSize: "40px", fontWeight: "700" }}>
                {counters.clients}
              </span>
              <p>Happy Clients</p>
            </div>

            {/* Item 2 */}
            <div className="stats-item" data-aos="fade-left" data-aos-delay="200">
              <div className="d-flex justify-content-center align-items-center" style={{
                 width:"80px",
                 height:"80px",
                 borderRadius:"50%",
                  fontSize: "50px",
                   color: "color-mix(in srgb, #ff7e00, transparent 10%)",
                   backgroundColor:"  color-mix(in srgb, #ff7e00, transparent 85%)",
                   }}>
                <FaBookOpen />
              </div>
              <span style={{ fontSize: "40px", fontWeight: "700" }}>
                {counters.projects}
              </span>
              <p>Projects</p>
            </div>

            {/* Item 3 */}
            <div className="stats-item" data-aos="fade-right" data-aos-delay="300">
              <div className="d-flex justify-content-center align-items-center" style={{ 
                 width:"80px",
                 height:"80px",
                 borderRadius:"50%",
                  fontSize: "50px",
                   color: " color-mix(in srgb, #00c875, transparent 10%)",
                   backgroundColor:" color-mix(in srgb, #00c875, transparent 85%)",
                  }}>
                <FaHeadset />
              </div>
              <span style={{ fontSize: "40px", fontWeight: "700" }}>
                {counters.support}
              </span>
              <p>Hours Of Support</p>
            </div>

            {/* Item 4 */}
            <div className="stats-item" data-aos="fade-right" data-aos-delay="400">
              <div className="d-flex justify-content-center align-items-center" style={{
                  width:"80px",
                  height:"80px",
                  borderRadius:"50%",
                   fontSize: "50px",
                    color: " color-mix(in srgb, #e83e8c, transparent 10%)",
                    backgroundColor:"  color-mix(in srgb, #e83e8c, transparent 85%)"
                   }}>
                <FaUsers />
              </div>
              <span style={{ fontSize: "40px", fontWeight: "700" }}>
                {counters.workers}
              </span>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default AbotCrds;
