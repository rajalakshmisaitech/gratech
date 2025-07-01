import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Offcanvas, Form, InputGroup } from 'react-bootstrap';
import { FaBars, FaPlus, FaSearch, FaEnvelope, FaPhoneAlt, FaTelegramPlane, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";
import { imgPath } from '../utils/constant';

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Header */}
      <div className={`top-header d-none d-xl-block ${isScrolled ? 'hidden' : ''}`}>
        <Container>
          <div className="top-header-contact">
            <div className="contact-item">
              <FaEnvelope />
              <span>info@example.com</span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt />
              <span>+208-6666-0112</span>
            </div>
          </div>
        </Container>
      </div>
      
      <header className={`header-gradient-bg ${isScrolled ? 'fixed' : ''}`}>
        <Navbar bg="white" expand="xl" className="header-navbar">
          <Container>
            <Navbar.Brand href="#home" className="fw-bold d-flex align-items-center logo-container">
              <img src={imgPath.logo} alt="Gratech Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar-nav" as="div" onClick={handleShow} style={{ border: 'none', background: 'none' }}>
              <FaBars style={{ fontSize: 24 }} />
            </Navbar.Toggle>
            <Navbar.Collapse id="main-navbar-nav" className="d-none d-xl-flex">
              <Nav className="mx-auto align-items-center" style={{ gap: '2rem', fontWeight: 500 }}>
                <Nav.Link href="#home" className="nav-home-link header-nav-link active">Home</Nav.Link>
                <Nav.Link href="#about" className="header-nav-link">About</Nav.Link>
                <Nav.Link href="#services" className="header-nav-link">Services</Nav.Link>
                <Nav.Link href="#pages" className="header-nav-link">Pages</Nav.Link>
                <Nav.Link href="#blog" className="header-nav-link">Blog</Nav.Link>
                <Nav.Link href="#contact" className="header-nav-link">Contact</Nav.Link>
                <FaSearch style={{ fontSize: 18, cursor: 'pointer', color: '#0f0d1d' }} className="search-icon" />
              </Nav>
              <button className="banner-btn btn-one">
                Get A Quote <FaArrowRightLong style={{ fontSize: 22 }} />
              </button>
            </Navbar.Collapse>
            <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end" className="header-offcanvas">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <img src={imgPath.logo} alt="Gratech Logo" style={{ height: 32 }} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex flex-column h-100">
                <div>
                  {/* Search Bar */}
                  <Form className="mb-4">
                    <InputGroup>
                      <Form.Control type="text" placeholder="Search..." style={{ borderRadius: 4 }} />
                      <InputGroup.Text style={{ background: '#fff', borderLeft: 0 }}>
                        <FaSearch style={{ color: '#0f0d1d' }} />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form>
                  {/* Nav Links with + icon */}
                  <Nav className="flex-column align-items-start offcanvas-nav" style={{ fontWeight: 500 }}>
                    <div className="offcanvas-link-row"><Nav.Link href="#home" className="header-nav-link active" onClick={handleClose}>Home</Nav.Link><span className="plus-icon"><FaPlus /></span></div>
                    <div className="offcanvas-link-row"><Nav.Link href="#about" className="header-nav-link" onClick={handleClose}>About</Nav.Link><span className="plus-icon"><FaPlus /></span></div>
                    <div className="offcanvas-link-row"><Nav.Link href="#services" className="header-nav-link" onClick={handleClose}>Services</Nav.Link><span className="plus-icon"><FaPlus /></span></div>
                    <div className="offcanvas-link-row"><Nav.Link href="#pages" className="header-nav-link" onClick={handleClose}>Pages</Nav.Link><span className="plus-icon"><FaPlus /></span></div>
                    <div className="offcanvas-link-row"><Nav.Link href="#blog" className="header-nav-link" onClick={handleClose}>Blog</Nav.Link><span className="plus-icon"><FaPlus /></span></div>
                    <div className="offcanvas-link-row"><Nav.Link href="#contact" className="header-nav-link last-nav-link" onClick={handleClose}>Contact</Nav.Link></div>
                  </Nav>
                  {/* Contact Info */}
                  <div className="offcanvas-contact mt-4">
                    <div className="d-flex align-items-center mb-2"><FaMapMarkerAlt className="me-2" /> example@example.com</div>
                    <div className="d-flex align-items-center mb-2"><FaPhoneAlt className="me-2" /> +208-6666-0112</div>
                    <div className="d-flex align-items-center mb-2"><FaTelegramPlane className="me-2" /> info@example.com</div>
                  </div>
                </div>
                {/* Social Icons */}
                <div className="offcanvas-social d-flex gap-3 mt-4">
                  <a href="#" className="social-icon-link"><FaFacebookF /></a>
                  <a href="#" className="social-icon-link"><FaTwitter /></a>
                  <a href="#" className="social-icon-link"><FaLinkedinIn /></a>
                  <a href="#" className="social-icon-link"><FaYoutube /></a>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
