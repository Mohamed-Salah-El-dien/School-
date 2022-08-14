import React from 'react';
import './home.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper';
import home1 from '../../../assets/images/home-slide-1.jpg';
import home2 from '../../../assets/images/home-slide-2.jpg';
import home3 from '../../../assets/images/home-slide-3.jpg';

const home = () => {
  return (
    <section className="home">
      <Swiper
        modules={[Pagination, Scrollbar]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        grabCursor={true}
        direction={'horizontal'}
      >
        {/* ******************************************** */}
        {/* ******************************************** */}
        {/* ******************************************** */}
        <SwiperSlide
          className="swiper-slide slide"
          style={{
            backgroundImage: `url(${home1})`,
          }}
        >
          <div className="content">
            <h3>the best courses you will find find here!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              impedit labore dolore unde, quidem corrupti?
            </p>
            <button className="btn">get started</button>
          </div>
        </SwiperSlide>
        {/* ******************************************** */}
        {/* ******************************************** */}
        {/* ******************************************** */}
        <SwiperSlide
          className="swiper-slide slide"
          style={{
            backgroundImage: `url(${home2})`,
          }}
        >
          <div className="content">
            <h3>the best courses you will find find here!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              impedit labore dolore unde, quidem corrupti?
            </p>
            <button className="btn">get started</button>
          </div>
        </SwiperSlide>
        {/* ******************************************** */}
        {/* ******************************************** */}
        {/* ******************************************** */}
        <SwiperSlide
          className="swiper-slide slide"
          style={{
            backgroundImage: `url(${home3})`,
          }}
        >
          <div className="content">
            <h3>the best courses you will find find here!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              impedit labore dolore unde, quidem corrupti?
            </p>
            <button className="btn">get started</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default home;
