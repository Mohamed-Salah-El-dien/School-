import React from 'react';
import Header from './Header/Header';
import Hero from './Home/home';
import Subjects from './Subjects/Subjects';
import Courses from './Courses/Courses';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Subjects />
      <Courses />
      <Footer />
    </div>
  );
};

export default Home;
