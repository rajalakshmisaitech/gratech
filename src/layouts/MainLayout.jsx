import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "../pages/home/Banner";
import OfferSection from "../pages/home/OfferSection";
import AboutSection from "../pages/home/AboutSection";
import CounterSection from "../pages/home/CounterSection";
import CaseStudiesSection from "../pages/home/CaseStudiesSection";
import OfferingSection from "../pages/home/OfferingSection";
import ClientLogoSection from "../pages/home/ClientLogoSection";
import WorkProcessSection from "../pages/home/WorkProcessSection";
import BlogSection from "../pages/home/BlogSection";
import TestimonialSection from "../pages/home/TestimonialSection";

const layoutStyle = {
  marginLeft: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
};

const MainLayout = ({ children }) => (
  <div style={{ minHeight: "100vh", background: "#fff" }}>
    <Header />
    <Banner />
    <OfferSection />
    <AboutSection />
    <CounterSection />
    <CaseStudiesSection />
    <OfferingSection />
    <ClientLogoSection />
    <WorkProcessSection />
    <TestimonialSection />
    <BlogSection />
      <Footer />
  </div>
);

export default MainLayout; 