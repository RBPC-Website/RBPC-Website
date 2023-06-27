import React from 'react';

import Header from '../partials/Header';
import GlowingBlob from '../utils/GlowyBlob';
import Countdown from '../utils/Countdown';
import AreaOfFocus from '../partials/AreaOfFocus';
import RulesAndRegulation from '../partials/RulesAndRegulation';
import JudgingCriteria from '../partials/JudgingCriteria';
import WhoCanEnter from '../partials/WhoCanEnter';
import Timeline from '../partials/Timeline';
import Footer from '../partials/Footer';
import Prize from '../partials/Prizes';
import HeroSection from '../partials/HeroSection';


function Home() {
  return (
    // Do not change any styles in this file
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Countdown />
      <Header />

      {/*  Page content */}
      <main className="flex-grow bg-black-100 text-gray-100">
      {/* <GlowingBlob /> */}
        {/*  Page sections */}
        <HeroSection />
        <AreaOfFocus />
        <Prize />
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