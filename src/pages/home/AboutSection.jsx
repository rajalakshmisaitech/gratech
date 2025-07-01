import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import aboutMainImg from "../../assets/images/about/about-image1.jpg";
import aboutVideoImg from "../../assets/images/about/about-image2.png";
import aboutShape from "../../assets/images/shapes/about-circle.png";
// import aboutShape from "../../assets/images/banner/banner-solid-left-shape.png";
import serviceIcon1 from "../../assets/images/icons/about-icon1.png";
import serviceIcon2 from "../../assets/images/icons/about-icon2.png";
import founderImg from "../../assets/images/about/about-info.png";
import { FaPlay, FaArrowRightLong } from "react-icons/fa6";
import aboutLineShape from "../../assets/images/shapes/about-line.png";

const AboutSection = () => (
  <section className="section" style={{ background: "#f6f9fc", padding: "120px 0 240px 0", position: 'relative', overflow: 'hidden' }}>
    <div className="container">
      <Row className="align-items-center g-4">
        {/* Left: Overlapping Images */}
        <Col xl={6} className="wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '200ms', animationName: 'fadeInRight' }}>
          <div className="about__left-item">
            <div className="image big-image">
              <img src={aboutMainImg} alt="image" />
            </div>
            <div className="image sm-image">
              <div className="video__btn-wrp">
                <div className="video-btn video-pulse">
                  <a className="video-popup" href="https://www.youtube.com/watch?v=iVqz_4M5mA0"><i className="fa-solid fa-play"></i></a>
                </div>
              </div>
              <img src={aboutVideoImg} alt="image" />
            </div>
            <div className="circle-shape">
              <img src={aboutShape} alt="shape" />
            </div>
          </div>
        </Col>
        {/* Right: Content */}
        <Col xl={6}>
          <div className="d-flex align-items-center mb-2 offer-section__subtitle" style={{ gap: 8 }}>
            <span style={{ background: '#3c72fc', borderRadius: 12, width: 32, height: 16, display: 'inline-block', marginRight: 8 }}></span>
            ABOUT GRATECH
          </div>
          <h2 className="offer-section__title" style={{ fontSize: 38, marginBottom: 20 }}>
            We Strive To Offer Intelligent Business Solutions
          </h2>
          <p style={{ color: '#222', opacity: 0.8, fontSize: 18, marginBottom: 32 }}>
            Aonsectetur adipiscing elit aenean scelerisque augue vitae consequat aisque eget congue velit in cursus sodales the turpis euismod quis sapien euismod quis sapien the condimentum nec lorem nulla augue.
          </p>
          <Row className="mb-4 g-3">
            <Col md={6}>
              <div style={{ borderRadius: 8, padding: 18, display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ background: 'rgba(60, 114, 252, 0.1)', padding: 12 }}>
                  <img src={serviceIcon1} alt="Best Services" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0f0d1d', fontSize: 18 }}>Best Services</div>
                  <div style={{ color: '#222', opacity: 0.7, fontSize: 15 }}>Scelerisque augue the consequat sodales</div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div style={{ borderRadius: 8, padding: 18, display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ background: 'rgba(60, 114, 252, 0.1)', padding: 12 }}>
                  <img src={serviceIcon2} alt="24/7 Call Support" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0f0d1d', fontSize: 18 }}>24/7 Call Support</div>
                  <div style={{ color: '#222', opacity: 0.7, fontSize: 15 }}>Scelerisque augue the consequat sodales</div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="d-flex align-items-center gap-4 flex-wrap">
            <Button style={{ background: 'var(--main-gradient)', border: 'none', fontWeight: 600, padding: '14px 32px', fontSize: 18, backgroundImage: 'var(--main-gradient)', color: '#fff', borderRadius: 0, display: 'flex', alignItems: 'center', gap: 10 }} className="btn-one">
              Explore More <FaArrowRightLong style={{ fontSize: 22 }} />
            </Button>
            <div className="d-flex align-items-center gap-3 mt-3 mt-md-0">
              <img src={founderImg} alt="Ronald Richards" style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '2px solid #fff', boxShadow: '0 2px 8px rgba(60,114,252,0.10)' }} />
              <div>
                <div style={{ fontWeight: 700, color: '#0f0d1d', fontSize: 16 }}>Ronald Richards</div>
                <div style={{ color: '#222', opacity: 0.7, fontSize: 14 }}>Co, Founder</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    <div className="about-line-anim wow slideInLeft" style={{ position: 'absolute', left: 0, bottom: 0, zIndex: 1, pointerEvents: 'none' }}>
      <img src={aboutLineShape} alt="About Line Shape" className="about-line-shape sway_Y" />
    </div>
  </section>
);

export default AboutSection; 