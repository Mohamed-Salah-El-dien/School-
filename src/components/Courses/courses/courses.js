import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBook } from '@fortawesome/fontawesome-free-solid';
import course1 from '../../../assets/images/course-2-1.jpg';
import course2 from '../../../assets/images/course-2-2.jpg';
import course3 from '../../../assets/images/course-2-3.jpg';
import course4 from '../../../assets/images/course-2-4.jpg';
import course5 from '../../../assets/images/course-2-5.jpg';
import course6 from '../../../assets/images/course-2-6.jpg';
import course7 from '../../../assets/images/course-2-7.jpg';
import course8 from '../../../assets/images/course-2-8.jpg';
import course9 from '../../../assets/images/course-2-9.jpg';
import './courses.css';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [toggleLoad, setToggleLoad] = useState(false);

  const handleClick = () => {
    setToggleLoad(!toggleLoad);
  };

  return (
    <div>
      <section className="heading-link">
        <h3>our courses</h3>
        <p>
          <Link to="/">Home </Link>/ Courses
        </p>
      </section>

      <section className="courses">
        <h1 className="heading"> our famous courses </h1>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={course1} alt="" />
              <h3>development</h3>
            </div>
            <div className="content">
              <h3>choose what's best for you!</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
                odit!
              </p>
              <button className="btn">read more</button>

              <div className="icons">
                <span>
                  <FontAwesomeIcon icon={faBook} className="i" />
                  12 modules
                </span>
                <span>
                  <FontAwesomeIcon icon={faClock} className="i" />6 hours
                </span>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={course2} alt="" />
              <h3>engineering</h3>
            </div>
            <div className="content">
              <h3>choose what's best for you!</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
                odit!
              </p>
              <button className="btn">read more</button>
              <div className="icons">
                <span>
                  <FontAwesomeIcon icon={faBook} className="i" />
                  12 modules
                </span>
                <span>
                  <FontAwesomeIcon icon={faClock} className="i" />6 hours
                </span>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={course3} alt="" />
              <h3>mathemetics</h3>
            </div>
            <div className="content">
              <h3>choose what's best for you!</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
                odit!
              </p>
              <button className="btn">read more</button>
              <div className="icons">
                <span>
                  <FontAwesomeIcon icon={faBook} className="i" />
                  12 modules
                </span>
                <span>
                  <FontAwesomeIcon icon={faClock} className="i" />6 hours
                </span>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={course4} alt="" />
              <h3>doctor</h3>
            </div>
            <div className="content">
              <h3>choose what's best for you!</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
                odit!
              </p>
              <button className="btn">read more</button>
              <div className="icons">
                <span>
                  <FontAwesomeIcon icon={faBook} className="i" />
                  12 modules
                </span>
                <span>
                  <FontAwesomeIcon icon={faClock} className="i" />6 hours
                </span>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={course5} alt="" />
              <h3>science</h3>
            </div>
            <div className="content">
              <h3>choose what's best for you!</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
                odit!
              </p>
              <button className="btn">read more</button>
              <div className="icons">
                <span>
                  <FontAwesomeIcon icon={faBook} className="i" />
                  12 modules
                </span>
                <span>
                  <FontAwesomeIcon icon={faClock} className="i" />6 hours
                </span>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={course6} alt="" />
              <h3>business</h3>
            </div>
            <div className="content">
              <h3>choose what's best for you!</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
                odit!
              </p>
              <button className="btn">read more</button>
              <div className="icons">
                <span>
                  <FontAwesomeIcon icon={faBook} className="i" />
                  12 modules
                </span>
                <span>
                  <FontAwesomeIcon icon={faClock} className="i" />6 hours
                </span>
              </div>
            </div>
          </div>

          <div className={toggleLoad ? 'box' : 'box hide'}>
            <div className="image">
              <img src={course7} alt="" />
              <h3>teaching</h3>
            </div>
            <div className="content">
              <h3>choose what's best for you!</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
                odit!
              </p>
              <button className="btn">read more</button>
              <div className="icons">
                <span>
                  <FontAwesomeIcon icon={faBook} className="i" />
                  12 modules
                </span>
                <span>
                  <FontAwesomeIcon icon={faClock} className="i" />6 hours
                </span>
              </div>
            </div>
          </div>

          <div className={toggleLoad ? 'box' : 'box hide'}>
            <div className="image">
              <img src={course8} alt="" />
              <h3>designing</h3>
            </div>
            <div className="content">
              <h3>choose what's best for you!</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
                odit!
              </p>
              <button className="btn">read more</button>
              <div className="icons">
                <span>
                  <FontAwesomeIcon icon={faBook} className="i" />
                  12 modules
                </span>
                <span>
                  <FontAwesomeIcon icon={faClock} className="i" />6 hours
                </span>
              </div>
            </div>
          </div>

          <div className={toggleLoad ? 'box' : 'box hide'}>
            <div className="image">
              <img src={course9} alt="" />
              <h3>dancing</h3>
            </div>
            <div className="content">
              <h3>choose what's best for you!</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
                odit!
              </p>
              <button className="btn">read more</button>
              <div className="icons">
                <span>
                  <FontAwesomeIcon icon={faBook} className="i" />
                  12 modules
                </span>
                <span>
                  <FontAwesomeIcon icon={faClock} className="i" />6 hours
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={toggleLoad ? 'load-more hide' : 'load-more'}>
          {' '}
          <div className="btn" onClick={handleClick}>
            load more
          </div>{' '}
        </div>
      </section>
    </div>
  );
};

export default Courses;
