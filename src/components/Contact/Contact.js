import React from 'react';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import Hero from './contact/contact';
import Faq from './Faq/Faq';
import Logos from './Logos/Logos';

const Contact = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Faq />
      <Logos />
      <Footer />
    </div>
  );
};

export default Contact;
