import React from "react";
import { Row, Col } from "react-bootstrap";
import { imgPath } from '../../utils/constant';

const counters = [
  {
    icon: imgPath.counterIcon1,
    number: "6,561+",
    desc: "satisfied clients",
  },
  {
    icon: imgPath.counterIcon2,
    number: "600+",
    desc: "finished projects",
  },
  {
    icon: imgPath.counterIcon3,
    number: "250+",
    desc: "skilled experts",
  },
  {
    icon: imgPath.counterIcon4,
    number: "590+",
    desc: "media posts",
  },
];

const CounterSection = () => (
  <section style={{ background: "#fff", padding: "48px 0" }}>
    <div className="container">
      <div style={{ background: "var(--main-gradient)", padding: 80, position: 'relative', overflow: 'hidden', zIndex: 1, marginTop: -120 }}>
        <Row className="g-4 justify-content-center align-items-center">
          {counters.map((item, idx) => (
            <Col key={item.desc} md={6} lg={3}>
              <div className="d-flex align-items-center gap-3 bg-transparent counter-item">
                <img src={item.icon} alt={item.desc} className="counter-item-img" />
                <div className="d-flex flex-column justify-content-center">
                  <h3 className="counter-item-number">{item.number}</h3>
                  <p className="counter-item-desc">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <img src={imgPath.counnterBgShape} alt="Counter Shape" style={{ position: 'absolute', right: 0, bottom: 0, zIndex: -1, pointerEvents: 'none' }} />
      </div>
    </div>
  </section>
);

export default CounterSection; 