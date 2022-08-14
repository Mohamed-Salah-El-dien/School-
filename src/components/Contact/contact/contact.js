import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faPhone,
  faEnvelope,
  faMap,
} from '@fortawesome/fontawesome-free-solid';
import contact1 from '../../../assets/images/contact-img.png';
import './contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <section className="heading-link">
        <h3>contact us</h3>
        <p>
          <Link to="/">Home </Link>/ Contact
        </p>
      </section>

      <section className="contact">
        <h1 className="heading"> get in touch </h1>

        <div className="icons-container">
          <div className="icons">
            <FontAwesomeIcon icon={faClock} className="i" />

            <h3>opening hours :</h3>
            <p>00:07am to 00:06pm</p>
          </div>

          <div className="icons">
            <FontAwesomeIcon icon={faPhone} className="i" />
            <h3>phone :</h3>
            <p>+123-456-7890</p>
            <p>+111-222-3333</p>
          </div>

          <div className="icons">
            <FontAwesomeIcon icon={faEnvelope} className="i" />
            <h3> email : </h3>
            <p>********@gmail.com</p>
            <p>*******@gmail.com</p>
          </div>

          <div className="icons">
            <FontAwesomeIcon icon={faMap} className="i" />
            <h3>address :</h3>
            <p>****************</p>
          </div>
        </div>

        <div className="row">
          <div className="image">
            <img src={contact1} alt="" />
          </div>

          <form action="">
            <h3>send us a message</h3>
            <input type="text" placeholder="name" className="box" />
            <input type="email" placeholder="email" className="box" />
            <input type="number" placeholder="phone" className="box" />
            <textarea
              name=""
              className="box"
              placeholder="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="send message" className="btn" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
