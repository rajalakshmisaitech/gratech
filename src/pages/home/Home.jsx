import React from 'react';
import Banner from './Banner';
import OfferSection from './OfferSection';
import AboutSection from './AboutSection';
import CounterSection from './CounterSection';
import CaseStudiesSection from './CaseStudiesSection';
import ClientLogoSection from './ClientLogoSection';
import WorkProcessSection from './WorkProcessSection';
import BlogSection from './BlogSection';
import MainLayout from '../layouts/MainLayout';
import TestimonialSection from './TestimonialSection';

const Home = () => {
  return (
    <MainLayout>
      <Banner />
      <OfferSection />
      <AboutSection />
      <CounterSection />
      <CaseStudiesSection />
      <ClientLogoSection />
      <WorkProcessSection />
      <TestimonialSection />
      <BlogSection />
    </MainLayout>
  );
};

export default Home; 