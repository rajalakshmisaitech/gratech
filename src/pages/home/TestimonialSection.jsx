import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { imgPath } from '../../utils/constant';
import { FaStar, FaRegStar } from "react-icons/fa";
import "../../assets/css/TestimonialSection.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
      name: "Alex Rony",
      position: "Web Designer",
      image: imgPath.testimonialImage1,
      rating: 4
    },
    {
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Pellentesque habitant morbi tristique senectus et netus.",
      name: "Sarah Johnson",
      position: "Marketing Director",
      image: imgPath.testimonialImage2,
      rating: 5
    }
  ];

  return (
    <section
      className="testimonial-section section testimonial-section-bg"
      style={{
        background: `url(${imgPath.testimonialBg}) center/cover no-repeat`,
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Form */}
          <Col lg={6}>
            <div className="form-container">
              <div className="form-header">
                <svg width="28" height="12" viewBox="0 0 28 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.75" y="0.75" width="18.5" height="10.5" rx="5.25" stroke="white" strokeWidth="1.5"></rect>
                  <rect x="8" width="20" height="12" rx="6" fill="white"></rect>
                </svg>
                <span className="form-subtitle">
                  TALK TO US
                </span>
              </div>
              <h2 className="form-title">
                How May We Help You!
              </h2>
              
              <Form className="contact-form">
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Name*</Form.Label>
                      <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Email*</Form.Label>
                      <Form.Control type="email" placeholder="info@example.com" />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Subject*</Form.Label>
                      <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Phone*</Form.Label>
                      <Form.Control type="tel" placeholder="Your Phone" />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-4">
                  <Form.Label>Message*</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Your Message" />
                </Form.Group>
                
                <Button type="submit" className="send-message-btn">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
          
          {/* Right Side - Content */}
          <Col lg={6}>
            <div className="content-container">
              <div className="content-header">
                <img 
                  src={imgPath.sectionTitle} 
                  alt="Section Icon" 
                  className="section-icon"
                />
                <span className="content-subtitle">
                  CLIENTS REVIEW
                </span>
              </div>
              <h2 className="content-title">
                What They Say About Our
              </h2>
              <p className="content-description">
                It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.
              </p>
              
              {/* Testimonial Swiper Slider */}
              <div className="testimonial-slider">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={{
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="testimonial-swiper"
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonial-item testimonial-item-modern">
                        <div className="testimonial-header">
                          <img src={testimonial.image} alt={testimonial.name} className="testimonial-author-img" />
                          <div className="testimonial-author-details">
                            <div className="testimonial-author-name">{testimonial.name}</div>
                            <div className="testimonial-author-position">{testimonial.position}</div>
                            <div className="testimonial-rating">
                              {[1,2,3,4,5].map((star) => (
                                star <= testimonial.rating ? <FaStar key={star} color="#2563eb" /> : <FaRegStar key={star} color="#2563eb" />
                              ))}
                            </div>
                          </div>
                          <svg className="coma testimonial-quote-icon" width="50" height="37" viewBox="0 0 50 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z" fill="#3C72FC"></path>
                          </svg>
                        </div>
                        <div className="testimonial-modern-text">
                          {testimonial.text}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="testimonial-nav-wrapper">
                  <hr className="testimonial-nav-line" />
                  <button className="custom-swiper-button-prev" aria-label="Previous">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="25" r="24" stroke="#3C72FC" strokeWidth="1.5" fill="white" />
                      <path d="M29 35L19 25L29 15" stroke="#3C72FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button className="custom-swiper-button-next" aria-label="Next">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="25" r="25" fill="#3C72FC" />
                      <path d="M21 15L31 25L21 35" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <hr className="testimonial-nav-line" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialSection; 