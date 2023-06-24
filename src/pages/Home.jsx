import React from 'react';

import Header from '../partials-template/Header';
import HeroHome from '../partials-template/HeroHome';
import FeaturesHome from '../partials-template/Features';
import FeaturesBlocks from '../partials-template/FeaturesBlocks';
import Testimonials from '../partials-template/Testimonials';
import Newsletter from '../partials-template/Newsletter';
import RulesAndRegulation from '../partials/RulesAndRegulation';
import Footer from '../partials/Footer';

function Home() {
  return (
    // Do not change any styles in this file
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow bg-black-100 text-gray-100">

        {/*  Page sections */}
        {/* <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter /> */}
        <RulesAndRegulation />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;