import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/fontawesome-free-solid';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>
            <FontAwesomeIcon icon={faLightbulb} className="i" /> School
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
            voluptatem.
          </p>
          <div className="share">
            <FontAwesomeIcon icon={faFacebook} className="social-icons" />

            <FontAwesomeIcon icon={faTwitter} className="social-icons" />

            <FontAwesomeIcon icon={faInstagram} className="social-icons" />

            <FontAwesomeIcon icon={faLinkedin} className="social-icons" />
          </div>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/courses" className="link">
            Courses
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>

        <div className="box">
          <h3>useful links</h3>
          <Link to="#" className="link">
            help center
          </Link>
          <Link to="#" className="link">
            ask questions
          </Link>
          <Link to="#" className="link">
            send feedback
          </Link>
          <Link to="#" className="link">
            private policy
          </Link>
          <Link to="#" className="link">
            terms of use
          </Link>
        </div>

        <div class="box">
          <h3>newsletter</h3>
          <p>subscribe for latest upadates</p>
          <form action="">
            <input
              type="email"
              name=""
              placeholder="enter your email"
              id=""
              class="email"
            />
            <input type="submit" value="subscribe" class="btn" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
