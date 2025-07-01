import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Container, Row, Col } from "react-bootstrap";
import subtitleIcon from "../../assets/images/icons/section-title.png";
import case1 from "../../assets/images/case/case-image1.jpg";
import case2 from "../../assets/images/case/case-image2.jpg";
import case3 from "../../assets/images/case/case-image3.jpg";
import case4 from "../../assets/images/case/case-image4.jpg";

const CASES_PER_PAGE = 4;
const cases = [
  { img: case1, category: "Solution", title: "IT Management" },
  { img: case2, category: "Security", title: "Network Security" },
  { img: case3, category: "Cloud", title: "Cloud Migration" },
  { img: case4, category: "Support", title: "24/7 IT Support" },
  { img: case1, category: "Extra", title: "Another Case" },
  { img: case2, category: "More", title: "Yet Another" },
];

const CaseStudiesSection = () => (
  <section className="section" style={{ background: "#fff", padding: "120px 0" }}>
    <div className="container">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3" style={{ marginBottom: 60 }}>
        <div>
          <div className="d-flex align-items-center mb-2 offer-section__subtitle" style={{ gap: 8 }}>
            <img src={subtitleIcon} alt="Section Icon" style={{ verticalAlign: 'middle' }} />
            FROM OUR CASE STUDIES
          </div>
          <h2 className="offer-section__title">We Delivered Best Solution</h2>
        </div>
        <Button style={{ background: "var(--main-gradient)", border: "none", fontWeight: 600, padding: "14px 32px", fontSize: 18, backgroundImage: "var(--main-gradient)", color: "#fff", borderRadius: 0, display: 'flex', alignItems: 'center', gap: 10 }} className="btn-one">
          View All Case <FaArrowRightLong style={{ fontSize: 22 }} />
        </Button>
      </div>
    </div>
    <div className="case-studies-wrapper">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={CASES_PER_PAGE}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          renderCustom: (swiper, current, total) => {
            const pageCount = Math.ceil(cases.length / CASES_PER_PAGE);
            let dots = '';
            for (let i = 1; i <= pageCount; i++) {
              dots += `<span class="swiper-pagination-bullet${i === current ? ' swiper-pagination-bullet-active' : ''}"></span>`;
            }
            return `<div class="swiper-pagination-custom">${dots}</div>`;
          }
        }}
        breakpoints={{
          1200: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          576: { slidesPerView: 2 },
          0: { slidesPerView: 1, centeredSlides: true }
        }}
        className="case-studies-swiper"
        style={{ padding: '10px 0 40px 0' }}
      >
        {cases.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="case-card" style={{ position: 'relative', overflow: 'hidden' }}>
              {/* Before gradient overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, #0f0d1d 0%, rgba(15, 13, 29, 0) 125%)', zIndex: 1 }} />
              <img src={item.img} alt={item.title} style={{ width: '100%', objectFit: 'cover', display: 'block' }} />
              {/* Content over image */}
              <div style={{ position: 'absolute', left: 0, bottom: 0, zIndex: 2, padding: 24, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary-color)', fontWeight: 600, fontSize: 15, letterSpacing: 1, borderRadius: 6, display: 'inline-block' }}>{item.category}</span>
                  <h3 style={{ fontSize: 24, fontWeight: 600, color: '#fff', margin: '8px 0 0 0', lineHeight: 1.2 }}>{item.title}</h3>
                </div>
                <a href="#" className="case-arrow" aria-label="View Case Study" style={{ width: 40, height: 40, borderRadius: 0 }}>
                  <FaArrowRight/>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default CaseStudiesSection; 