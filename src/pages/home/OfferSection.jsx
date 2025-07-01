import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { imgPath } from '../../utils/constant';

const services = [
  {
    icon: imgPath.serviceIcon1,
    title: "IT Management",
    desc: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
  },
  {
    icon: imgPath.serviceIcon2,
    title: "Cyber Security",
    desc: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
  },
  {
    icon: imgPath.serviceIcon3,
    title: "Web Development",
    desc: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
  },
];

const OfferSection = () => (
  <section className="section" style={{ background: "#fff", padding: "60px 0", position: "relative", overflow: "hidden" }}>
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <div>
          <div className="d-flex align-items-center mb-2 offer-section__subtitle" style={{ gap: 8 }}>
            <span><img src={imgPath.sectionTitle} alt="Section Icon" style={{ verticalAlign: 'middle' }} /></span>
            WHAT WE OFFER
          </div>
          <h2 className="offer-section__title">Excellent It Services</h2>
        </div>
        <Button style={{ background: "var(--main-gradient)", border: "none", fontWeight: 600, padding: "14px 32px", fontSize: 18, backgroundImage: "var(--main-gradient)", color: "#fff", borderRadius: 0 }} className="btn-one">
          View All Services &rarr;
        </Button>
      </div>
      <Row className="g-4 justify-content-center">
        {services.map((service, idx) => (
          <Col key={service.title} md={6} lg={4}>
            <Card className="service__item shadow-sm h-100" style={{ border: "none", borderRadius: 0, position: "relative", overflow: "hidden" }}>
              {/* Pattern image, only visible on hover via CSS */}
              <img src={imgPath.serviceItemShape} alt="Service Shape" className="service__pattern" />
              <Card.Body className="d-flex flex-column align-items-start p-4 position-relative" style={{ zIndex: 2 }}>
                <div className="service__icon" style={{ background: 'rgba(60, 114, 252, 0.1)', borderRadius: 8, padding: 12, marginBottom: 24 }}>
                  <img src={service.icon} alt={service.title} />
                </div>
                <Card.Title as="h4" className="service__title" style={{ fontWeight: 700, fontSize: 22, color: "#0f0d1d" }}>
                  {service.title}
                </Card.Title>
                <Card.Text className="service__desc" style={{ color: "#0f0d1d", opacity: 0.8, marginTop: 12 }}>
                  {service.desc}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </section>
);

export default OfferSection; 