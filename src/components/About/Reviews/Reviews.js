import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/fontawesome-free-solid';
import pic1 from '../../../assets/images/pic-1.png';
import pic2 from '../../../assets/images/pic-2.png';
import pic3 from '../../../assets/images/pic-3.png';
import pic4 from '../../../assets/images/pic-4.png';
import pic5 from '../../../assets/images/pic-5.png';
import pic6 from '../../../assets/images/pic-6.png';
import './Reviews.css';

const Reviews = () => {
  return (
    <section className="reviews">
      <h1 className="heading"> our students review </h1>

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
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi
            atque numquam harum libero nemo, eligendi laboriosam beatae quo iure
            corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.
          </p>
          <img src={pic1} alt="" />
          <h3>john deo</h3>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStarHalf} className="i" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi
            atque numquam harum libero nemo, eligendi laboriosam beatae quo iure
            corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.
          </p>
          <img src={pic2} alt="" />
          <h3>john deo</h3>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStarHalf} className="i" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi
            atque numquam harum libero nemo, eligendi laboriosam beatae quo iure
            corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.
          </p>
          <img src={pic3} alt="" />
          <h3>john deo</h3>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStarHalf} className="i" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi
            atque numquam harum libero nemo, eligendi laboriosam beatae quo iure
            corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.
          </p>
          <img src={pic4} alt="" />
          <h3>john deo</h3>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStarHalf} className="i" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi
            atque numquam harum libero nemo, eligendi laboriosam beatae quo iure
            corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.
          </p>
          <img src={pic5} alt="" />
          <h3>john deo</h3>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStarHalf} className="i" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi
            atque numquam harum libero nemo, eligendi laboriosam beatae quo iure
            corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.
          </p>
          <img src={pic6} alt="" />
          <h3>john deo</h3>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStarHalf} className="i" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Reviews;
