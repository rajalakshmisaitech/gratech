import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import banner1 from "../../assets/images/banner/banner-image.jpg";
import banner2 from "../../assets/images/banner/banner-image2.jpg";
import banner3 from "../../assets/images/banner/banner-image3.jpg";
import bannerShapeLeft from "../../assets/images/banner/banner-shape-left.png";
import bannerSolidLeftShape from "../../assets/images/banner/banner-solid-left-shape.png";
import bannerRegularLeftShape from "../../assets/images/banner/banner-regular-left-shape.png";
import bannerShapeRight from "../../assets/images/banner/banner-shape-right.png";
import bannerShapeRightLine from "../../assets/images/banner/banner-shape-right-line.png";
import bannerRightLine1 from "../../assets/images/banner/banner-right-line1.png";
import bannerRightLine2 from "../../assets/images/banner/banner-right-line2.png";
import bannerRightLine3 from "../../assets/images/banner/banner-right-line3.png";
import bannerRightLine4 from "../../assets/images/banner/banner-right-line4.png";
import { FaArrowRightLong } from "react-icons/fa6";

const slides = [
  {
    headline: "Excellent IT Services for Your Success",
    subheadline: "Consectetur adipiscing elit aenean scelerisque at augue vitae consequat quisque eget congue velit in cursus leo sed sodales est eget turpis.",
    button: "Explore More",
    image: banner1,
  },
  {
    headline: "Empowering Your Business with Technology",
    subheadline: "We deliver innovative solutions to help your business grow and succeed in the digital era.",
    button: "Our Services",
    image: banner2,
  },
  {
    headline: "Trusted IT Partner for Enterprises",
    subheadline: "Partner with us for reliable, scalable, and secure IT services tailored to your needs.",
    button: "Contact Us",
    image: banner3,
  },
];

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [animateLines, setAnimateLines] = useState(false);

  const handleSlideChange = (swiper) => {
    setSlideIndex(swiper.activeIndex);
    setAnimateLines(false); // Reset animation
    setTimeout(() => setAnimateLines(true), 10); // Re-trigger animation
  };

  useEffect(() => {
    setAnimateLines(true);
  }, []);

  return (
    <section className="main-banner">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        pagination={{ clickable: true }}
        effect="fade"
        loop={true}
        className="banner-swiper"
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="banner__shape-right2" data-animation="slideInRight" data-duration="3s" data-delay=".3s" style={{ animationDelay: '0.3s', animationDuration: '3s' }}>
              <img src={bannerShapeRightLine} alt="shape" />
            </div>
            <div className="banner__shape-right1" data-animation="slideInRight" data-duration="2s" data-delay=".3s" style={{ animationDelay: '0.3s', animationDuration: '2s' }}>
              <img src={bannerShapeRight} alt="shape" />
            </div>
            <div className="banner__shape-left3 wow slideInLeft" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>
              <img className="sway__animation" src={bannerShapeLeft} alt="shape" />
            </div>
            <div data-animation="slideInLeft" data-duration="2s" data-delay=".3s" className="banner__shape-left2 wow slideInLeft" style={{ animationDelay: '0.3s', animationDuration: '2s' }}>
              <img src={bannerRegularLeftShape} alt="shape" />
            </div>
            <div data-animation="slideInLeft" data-duration="2s" data-delay=".3s" className="banner__shape-left1 wow slideInLeft" style={{ animationDelay: '0.3s', animationDuration: '2s' }}>
              <img src={bannerSolidLeftShape} alt="shape" />
            </div>
            <div
              className={`banner__right-line1 wow slideInRight`} data-animation="slideInRight" data-duration="2s" data-delay="0.9s"
              style={{ animationDelay: '0.9s', animationDuration: '2s' }}
            >
              <img src={bannerRightLine1} alt="shape" />
            </div>
            <div
              className={`banner__right-line2 wow slideInRight`} data-animation="slideInRight" data-duration="2s" data-delay="1.1s"
              style={{ animationDelay: '1.1s', animationDuration: '2s' }}
            >
              <img src={bannerRightLine2} alt="shape" />
            </div>
            <div
              className={`banner__right-line3 wow slideInRight`} data-animation="slideInRight" data-duration="2s" data-delay="1.3s"
              style={{ animationDelay: '1.3s', animationDuration: '2s' }}
            >
              <img src={bannerRightLine3} alt="shape" />
            </div>
            <div
              className={`banner__right-line4 wow slideInRight`} data-animation="slideInRight" data-duration="2s" data-delay="1.5s"
              style={{ animationDelay: '1.5s', animationDuration: '2s', visibility: 'visible' }}
            >
              <img src={bannerRightLine4} alt="shape" />
            </div>
            <div className="banner-slide" style={{ background: `url(${slide.image}) center/cover no-repeat` }}>
              <div className="container">
                <div className="banner-content-container">
                  <div className="mb-3 d-flex align-items-center banner-headline">
                    <span className="banner-svg-icon">
                      <svg className="me-1" width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.500183" width="25.6667" height="15" rx="7.5" stroke="white"></rect>
                        <rect x="13.3334" y="0.000183105" width="26.6667" height="16" rx="8" fill="white"></rect>
                      </svg>
                    </span>
                    <span className="banner-headline-text">BEST IT SOULTION PROVIDER</span>
                  </div>
                  <h1 className="banner-title">
                    {slide.headline}
                  </h1>
                  <p className="banner-desc">
                    {slide.subheadline}
                  </p>
                  <button className="banner-btn btn-one">
                    {slide.button} <FaArrowRightLong style={{ fontSize: 22 }} />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner; 