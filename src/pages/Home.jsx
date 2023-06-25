import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials-template/HeroHome';
import AreaOfFocus from '../partials/AreaOfFocus';
import FeaturesHome from '../partials-template/Features';
import FeaturesBlocks from '../partials-template/FeaturesBlocks';
import Testimonials from '../partials-template/Testimonials';
import Newsletter from '../partials-template/Newsletter';
import RulesAndRegulation from '../partials/RulesAndRegulation';
import Footer from '../partials-template/Footer';
import JudgingCriteria from '../partials/JudgingCriteria';
import WhoCanEnter from '../partials/WhoCanEnter';
import Timeline from '../partials/Timeline';
import Footer from '../partials/Footer';
import HeroSection from '../partials/HeroSection';


function Home() {
  return (
    // Do not change any styles in this file
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow bg-black-100 text-gray-100">

        {/*  Page sections */}
        <HeroSection />
        {/* <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter /> */}
        <AreaOfFocus />
        <WhoCanEnter />
        <Timeline />
        <JudgingCriteria />
        <RulesAndRegulation />
      </main>

      {/*  Site footer */}
      <Footer />

    </div>
    
  );
}

export default Home;