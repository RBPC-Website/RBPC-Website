import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import { ContactForm } from '../partials/ContactForm';

function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <ContactForm />
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default ContactUs;