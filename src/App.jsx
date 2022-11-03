import React from 'react';
import Billing from './components/Billing';
import Business from './components/Business';
import CardDeal from './components/CardDeal';
import Clients from './components/Clients';
import CTA from './components/CTA';
import FeedBackCard from './components/FeedbackCard';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import styled from './style';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styled.paddingX} ${styled.flexCenter}`}>
        <div className={`${styled.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styled.flexStart}`}>
        <div className={`${styled.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styled.paddingX} ${styled.flexStart}`}>
        <div className={`${styled.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <FeedBackCard />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
