import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import teacher1 from '../../../assets/images/teacher-1.png';
import teacher2 from '../../../assets/images/teacher-2.png';
import teacher3 from '../../../assets/images/teacher-3.png';
import teacher4 from '../../../assets/images/teacher-4.png';
import teacher5 from '../../../assets/images/teacher-5.png';
import teacher6 from '../../../assets/images/teacher-6.png';
import './Teachers.css';

const Teachers = () => {
  return (
    <section className="teachers">
      <h1 className="heading">expert teachers</h1>

      <Swiper
        spaceBetween={20}
        grabCursor={true}
        breakpoints={{
          500: {
            width: 500,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
          991: {
            width: 991,
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className="swiper-slide slide">
          <div className="image">
            <img src={teacher1} alt="" />
            <div className="share">
              <FontAwesomeIcon icon={faFacebook} className="a" />
              <FontAwesomeIcon icon={faTwitter} className="a" />
              <FontAwesomeIcon icon={faInstagram} className="a" />
              <FontAwesomeIcon icon={faLinkedin} className="a" />
            </div>
          </div>
          <div className="content">
            <h3>john deo</h3>
            <span>expert tutor</span>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <div className="image">
            <img src={teacher2} alt="" />
            <div className="share">
              <FontAwesomeIcon icon={faFacebook} className="a" />
              <FontAwesomeIcon icon={faTwitter} className="a" />
              <FontAwesomeIcon icon={faInstagram} className="a" />
              <FontAwesomeIcon icon={faLinkedin} className="a" />
            </div>
          </div>
          <div className="content">
            <h3>john deo</h3>
            <span>expert tutor</span>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <div className="image">
            <img src={teacher3} alt="" />
            <div className="share">
              <FontAwesomeIcon icon={faFacebook} className="a" />
              <FontAwesomeIcon icon={faTwitter} className="a" />
              <FontAwesomeIcon icon={faInstagram} className="a" />
              <FontAwesomeIcon icon={faLinkedin} className="a" />
            </div>
          </div>
          <div className="content">
            <h3>john deo</h3>
            <span>expert tutor</span>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <div className="image">
            <img src={teacher4} alt="" />
            <div className="share">
              <FontAwesomeIcon icon={faFacebook} className="a" />
              <FontAwesomeIcon icon={faTwitter} className="a" />
              <FontAwesomeIcon icon={faInstagram} className="a" />
              <FontAwesomeIcon icon={faLinkedin} className="a" />
            </div>
          </div>
          <div className="content">
            <h3>john deo</h3>
            <span>expert tutor</span>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <div className="image">
            <img src={teacher5} alt="" />
            <div className="share">
              <FontAwesomeIcon icon={faFacebook} className="a" />
              <FontAwesomeIcon icon={faTwitter} className="a" />
              <FontAwesomeIcon icon={faInstagram} className="a" />
              <FontAwesomeIcon icon={faLinkedin} className="a" />
            </div>
          </div>
          <div className="content">
            <h3>john deo</h3>
            <span>expert tutor</span>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <div className="image">
            <img src={teacher6} alt="" />
            <div className="share">
              <FontAwesomeIcon icon={faFacebook} className="a" />
              <FontAwesomeIcon icon={faTwitter} className="a" />
              <FontAwesomeIcon icon={faInstagram} className="a" />
              <FontAwesomeIcon icon={faLinkedin} className="a" />
            </div>
          </div>
          <div className="content">
            <h3>john deo</h3>
            <span>expert tutor</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Teachers;
