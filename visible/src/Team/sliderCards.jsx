import React from 'react';
// main.jsx or index.js
import slid1 from '../assets/Hom1ImgFail/person-f-5.webp';
import slid2 from '../assets/Hom1ImgFail/person-f-7.webp';
import slid3 from '../assets/Hom1ImgFail/person-f-9.webp';
import slid4 from '../assets/Hom1ImgFail/person-m-12.webp';
import slid5 from '../assets/Hom1ImgFail/person-m-3.webp';
import slid6 from '../assets/Hom1ImgFail/person-f-9.webp';
import slid7 from '../assets/Hom1ImgFail/person-f-7.webp';
import slid8 from '../assets/Hom1ImgFail/person-f-5.webp';

const TeamSlider = () => {
  const teamData = [
    { name: 'Emily Rodriguez', title: 'Project Manager', img: slid1, desc: 'At vero eos et accusamus.' },
    { name: 'Marcus Wilson', title: 'CTO', img: slid2, desc: 'Lorem ipsum dolor sit amet.' },
    { name: 'Sophia Reynolds', title: 'Product Designer', img: slid3, desc: 'Duis aute irure dolor.' },
    { name: 'Daniel Chen', title: 'Marketing Specialist', img: slid4, desc: 'Excepteur sint occaecat.' },
    { name: 'Olivia Thompson', title: 'Lead Developer', img: slid5, desc: 'Sed ut perspiciatis.' },
    { name: 'Jason Parker', title: 'UI/UX Designer', img: slid6, desc: 'Nemo enim ipsam voluptatem.' },
    { name: 'Liam Gray', title: 'DevOps Engineer', img: slid7, desc: 'Ut enim ad minima veniam.' },
    { name: 'Ava Mitchell', title: 'QA Analyst', img: slid8, desc: 'Quis autem vel eum.' },
  ];

  const slides = [];
  for (let i = 0; i < teamData.length; i += 4) {
    slides.push(teamData.slice(i, i + 4));
  }

  return (
    <section id="team" style={{ padding: '60px 0', backgroundColor: '#070d1a',marginTop:"150px" }}>
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-lg-6">
            <h2 style={{ fontWeight: 'bold',position:"relative",marginBottom:"20px" }} className='underLine'>Our Professional Team</h2>
            <p style={{ color: '#6c757d' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec ullamcorper.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-lg-end mt-3 mt-lg-0">
            <div className="btn-group">
              <button className="btn btn-outline-primary" type="button" data-bs-target="#teamCarousel" data-bs-slide="prev" style={{
                color:"#fff",
                backgroundColor:"#10a3d7",
              }}>
                <i className="bi bi-chevron-left"></i>
              </button>
              <button className="btn btn-outline-primary" type="button" data-bs-target="#teamCarousel" data-bs-slide="next" style={{
                color:"#fff",
                backgroundColor:"#10a3d7",
              }}>
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div id="teamCarousel" className="carousel slide team" data-bs-ride="carousel" data-bs-interval="false">
          <div className="carousel-inner">
            {slides.map((group, index) => (
              <div
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                key={index}
                style={{ transition: 'transform 7s ease-in-out',padding:"0 10px"   }}
              >
                <div className="row g-4">
                  {group.map((member, idx) => (
                    <div className="col-12 col-sm-6 col-lg-3" key={idx}>
                      <div
                        className="card h-100 position-relative"
                        style={{
                          backgroundColor: '#131825',
                          border: 'none',
                          textAlign: 'center',
                          overflow: 'hidden',
                          transition:"0.3s ease"
                        }}
                      >
                        <img
                          src={member.img}
                          alt={member.name}
                          className="card-img-top "
                        />
                        <div className="card-body">
                          <h5 className="card-title" style={{
                            color:"rgba(255, 255, 255, 0.73)"
                          }}>{member.name}</h5>
                          <p
                            style={{
                              fontWeight: '600',
                              color: '#10a3d7',
                              marginBottom: '8px',
                            }}
                          >
                            {member.title}
                          </p>
                          <p style={{ color: 'rgba(255, 255, 255, 0.73)' }}>{member.desc}</p>

                          <div className="position-absolute sochial-icons"
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              gap: '12px',
                              marginTop: '-160px',
                            }}
                          >

                            <a href="#"><i className="bi bi-twitter-x" style={{ fontSize: '1.2rem', color: '#10a3d7',
                           }}></i></a>

                            <a href="#"><i className="bi bi-facebook" style={{ fontSize: '1.2rem', color: '#10a3d7' }}></i></a>
                            <a href="#"><i className="bi bi-instagram" style={{ fontSize: '1.2rem', color: '#10a3d7' }}></i></a>
                            <a href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.2rem', color: '#10a3d7' }}></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;
