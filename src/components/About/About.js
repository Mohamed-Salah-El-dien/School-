import React from 'react';
import Header from '../Home/Header/Header';
import Hero from './about/about';
import Teachers from './Teachers/Teachers';
import Reviews from './Reviews/Reviews';
import Footer from '../Home/Footer/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Teachers />
      <Reviews />
      <Footer />
    </div>
  );
};

export default About;
