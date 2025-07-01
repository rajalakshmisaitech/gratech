import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaTwitter } from "react-icons/fa";
import { FaAnglesRight, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { MdCall } from "react-icons/md";
import logoLight from "../assets/images/logo/logo.svg";
import footerShadow from "../assets/images/shapes/footer-shadow-shape.png";
import footerShapeRight from "../assets/images/shapes/footer-solid-right.png";
import footerShapeSolidRight from "../assets/images/shapes/footer-regular-right.png";
import footerShapeRegularLeft from "../assets/images/shapes/footer-regular-left.png";
import footerShapeSolidLeft from "../assets/images/shapes/footer-solid-left.png";

const Footer = () => {

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer__shadow-shape">
          <img src={footerShadow} alt="Footer Shadow Shape" />
        </div>
        <div className="footer__shape-solid-right wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms">
          <img className="sway_Y__animation" src={footerShapeSolidRight} alt="shape" />
        </div>
        <div className="footer__shape-regular-right wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
          <img src={footerShapeRight} alt="shape" />
        </div>
        <div className="footer__shape-regular-left wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
          <img src={footerShapeRegularLeft} alt="shape" />
        </div>
        <div className="footer__shape-solid-left wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
          <img className="sway_Y__animation" src={footerShapeSolidLeft} alt="shape" />
        </div>
        <Container>
          <Row className="justify-content-around gy-4">
            {/* Company Info */}
            <Col lg={3} md={6}>
              <div className="mb-3">
                <img 
                  src={logoLight}
                  alt="Gratech Logo" 
                  height="40"
                  className="mb-3"
                />
              </div>
              <p className="mb-3" style={{ color: "var(--white)", opacity: 0.8 }}>
                Gratech is a leading technology company specializing in innovative solutions 
                that drive digital transformation and business growth.
              </p>
              <div className="social-links">
                <a href="#" className="text-light text-decoration-none social-icon-link">
                  <FaFacebookF size={16} />
                </a>
                <a href="#" className="text-light text-decoration-none social-icon-link">
                  <FaTwitter size={16} />
                </a>
                <a href="#" className="text-light text-decoration-none social-icon-link">
                  <FaLinkedinIn size={16} />
                </a>
                <a href="#" className="text-light text-decoration-none social-icon-link">
                  <FaYoutube size={16} />
                </a>
              </div>
            </Col>

            {/* IT Solution */}
            <Col lg={3} md={6}>
              <h3 className="footer-title">IT Solution</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none d-flex align-items-center">
                    <FaAnglesRight size={12} className="me-2" />
                    IT Management
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none d-flex align-items-center">
                    <FaAnglesRight size={12} className="me-2" />
                    SEO Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none d-flex align-items-center">
                    <FaAnglesRight size={12} className="me-2" />
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none d-flex align-items-center">
                    <FaAnglesRight size={12} className="me-2" />
                    Cyber Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none d-flex align-items-center">
                    <FaAnglesRight size={12} className="me-2" />
                    Data Security
                  </a>
                </li>
              </ul>
            </Col>

            {/* Quick Link */}
            <Col lg={2} md={6}>
              <h3 className="footer-title">Quick Link</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none d-flex align-items-center">
                    <FaAnglesRight size={12} className="me-2" />
                    About Gratech
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none d-flex align-items-center">
                    <FaAnglesRight size={12} className="me-2" />
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none d-flex align-items-center">
                    <FaAnglesRight size={12} className="me-2" />
                    Pricing Plan
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none d-flex align-items-center">
                    <FaAnglesRight size={12} className="me-2" />
                    Our Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none d-flex align-items-center">
                    <FaAnglesRight size={12} className="me-2" />
                    Our Team
                  </a>
                </li>
              </ul>
            </Col>

            {/* Contact Us */}
            <Col lg={3} md={6}>
              <h3 className="footer-title">Contact Us</h3>
              <div className="footer-address">
                <span style={{ color: "var(--white)", opacity: 0.8 }}>4517 Washington Ave. Manchester, Kentucky 39495</span>
              </div>
              <div className="footer-time">
                <IoMdTime />
                <div className="time-title">
                  <h5>Opening Hours:</h5>
                  <p style={{ marginBottom: 0 }}>Mon – Sat: 10.00 AM – 4.00 PM</p>
                </div>
              </div>
              <div className="footer-call">
                <MdCall />
                <div className="time-title">
                  <h5>Phone Call:</h5>
                  <p style={{ marginBottom: 0 }}>208-6666-0112, 308-5555-0113</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center gy-4 justify-content-center">
            <Col sm={6} className="text-center text-sm-start">
              <p className="mb-0" style={{ color: "var(--white)", opacity: 0.8 }}>
                &copy; All Copyright 2025 by Gratech
              </p>
            </Col>
            <Col sm={6} className="text-center text-sm-end">
              <div className="d-flex gap-3 justify-content-center justify-content-md-end">
                <a href="#" className="text-decoration-none small" style={{ color: "var(--white)", opacity: 0.8 }}>Terms & Conditions</a>
                <a href="#" className="text-decoration-none small" style={{ color: "var(--white)", opacity: 0.8 }}>Privacy Policy</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer; 