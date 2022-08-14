import React from 'react';
import './Courses.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import course1 from '../../../assets/images/course-1-1.png';
import course2 from '../../../assets/images/course-1-2.png';
import course3 from '../../../assets/images/course-1-3.png';
import course4 from '../../../assets/images/course-1-4.png';
import course5 from '../../../assets/images/course-1-5.png';
import course6 from '../../../assets/images/course-1-6.png';

const Courses = () => {
  return (
    <section className="home-courses">
      <h1 className="heading"> our popular courses </h1>

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
        <SwiperSlide className="slide">
          <div className="image">
            <img src={course1} alt="" />
            <h3>web development</h3>
          </div>
          <div className="content">
            <h3>web development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              ratione?
            </p>
            <button className="btn">read more</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <div className="image">
            <img src={course2} alt="" />
            <h3>web development</h3>
          </div>
          <div className="content">
            <h3>web development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              ratione?
            </p>
            <button className="btn">read more</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <div className="image">
            <img src={course3} alt="" />
            <h3>web development</h3>
          </div>
          <div class="content">
            <h3>web development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              ratione?
            </p>
            <button className="btn">read more</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <div className="image">
            <img src={course4} alt="" />
            <h3>web development</h3>
          </div>
          <div className="content">
            <h3>web development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              ratione?
            </p>
            <button className="btn">read more</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <div className="image">
            <img src={course5} alt="" />
            <h3>web development</h3>
          </div>
          <div className="content">
            <h3>web development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              ratione?
            </p>
            <button className="btn">read more</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <div className="image">
            <img src={course6} alt="" />
            <h3>web development</h3>
          </div>
          <div className="content">
            <h3>web development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              ratione?
            </p>
            <button className="btn">read more</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Courses;
