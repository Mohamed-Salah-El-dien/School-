import React from 'react';
import about1 from '../../../assets/images/about-img.jpg';
import icon1 from '../../../assets/images/about-icon-1.png';
import icon2 from '../../../assets/images/about-icon-2.png';
import icon3 from '../../../assets/images/about-icon-3.png';
import './about.css';
import { Link } from 'react-router-dom';

const about = () => {
  return (
    <div>
      <section className="heading-link">
        <h3>about us</h3>
        <p>
          <Link to="/">Home </Link>/ About
        </p>
      </section>

      <section className="about">
        <div className="image">
          <img src={about1} alt="" />
        </div>

        <div className="content">
          <h3 className="about-title">we have best courses for you</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            hic magnam fugit exercitationem neque, quae laboriosam natus. Ut
            maxime assumenda facere ea quasi accusamus dolores delectus tempora
            animi, expedita iste.
          </p>
          <div className="icons-container">
            <div className="icons">
              <img src={icon1} alt="" />
              <h3>350+</h3>
              <span>courses</span>
            </div>
            <div className="icons">
              <img src={icon2} alt="" />
              <h3>1200+</h3>
              <span>students</span>
            </div>
            <div className="icons">
              <img src={icon3} alt="" />
              <h3>10+</h3>
              <span>awards</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
