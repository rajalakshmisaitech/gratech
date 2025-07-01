import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { imgPath } from '../../utils/constant';

const clientLogos = [
  { id: 1, name: "Brand 1", logo: imgPath.brandImage1 },
  { id: 2, name: "Brand 2", logo: imgPath.brandImage2 },
  { id: 3, name: "Brand 3", logo: imgPath.brandImage3 },
  { id: 4, name: "Brand 4", logo: imgPath.brandImage4 },
  { id: 5, name: "Brand 5", logo: imgPath.brandImage5 },
  { id: 6, name: "Brand 1", logo: imgPath.brandImage1 },
  { id: 7, name: "Brand 2", logo: imgPath.brandImage2 },
];

const ClientLogoSection = () => (
  <section style={{ background: "#fff", padding: "48px 0" }}>
    <div className="container">
      <div style={{ 
        background: "var(--main-gradient)", 
        padding: 60, 
        position: 'relative', 
        overflow: 'hidden', 
        zIndex: 1, 
        marginTop: -150 
      }}>
        {/* Brand Shape Background */}
        <div style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          opacity: 0.3,
          zIndex: -1
        }}>
          <img 
            src={imgPath.brandShape} 
            alt="Brand Shape" 
            style={{
              maxWidth: "100%",
              height: "auto"
            }}
          />
        </div>
        
        <Row className="justify-content-center">
          <Col xs={12}>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={5}
              loop={true}
              navigation={false}
              pagination={false}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 30
                }
              }}
            >
              {clientLogos.map((logo) => (
                <SwiperSlide key={logo.id}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "80px",
                    padding: "10px"
                  }}>
                    <img
                      src={logo.logo}
                      alt={logo.name}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                        filter: "brightness(0) invert(1)"
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </div>
    </div>
  </section>
);

export default ClientLogoSection; 