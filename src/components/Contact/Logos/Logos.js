import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import logo1 from '../../../assets/images//partner-logo-1.png';
import logo2 from '../../../assets/images//partner-logo-2.png';
import logo3 from '../../../assets/images//partner-logo-3.png';
import logo4 from '../../../assets/images//partner-logo-4.png';
import logo5 from '../../../assets/images//partner-logo-5.png';
import './Logos.css';

const Logos = () => {
  return (
    <div>
      <section className="logo-container">
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
          <SwiperSlide className="swiper-slide">
            <img src={logo1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={logo2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={logo3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={logo4} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={logo5} alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Logos;
