import React from 'react';
import subject1 from '../../../assets/images/subject-icon-1.png';
import subject2 from '../../../assets/images/subject-icon-2.png';
import subject3 from '../../../assets/images/subject-icon-3.png';
import subject4 from '../../../assets/images/subject-icon-4.png';
import subject5 from '../../../assets/images/subject-icon-5.png';
import subject6 from '../../../assets/images/subject-icon-6.png';
import './Subjects.css';

const Subjects = () => {
  return (
    <section className="subjects">
      <h1 className="heading">our popular subjects</h1>

      <div className="box-container">
        <div className="box">
          <img src={subject1} alt="" />
          <h3>graphic design</h3>
          <p>12 modules</p>
        </div>

        <div className="box">
          <img src={subject2} alt="" />
          <h3>mathemetics</h3>
          <p>12 modules</p>
        </div>

        <div className="box">
          <img src={subject3} alt="" />
          <h3>teaching</h3>
          <p>12 modules</p>
        </div>

        <div className="box">
          <img src={subject4} alt="" />
          <h3>development</h3>
          <p>12 modules</p>
        </div>

        <div className="box">
          <img src={subject5} alt="" />
          <h3>science</h3>
          <p>12 modules</p>
        </div>

        <div className="box">
          <img src={subject6} alt="" />
          <h3>engineering</h3>
          <p>12 modules</p>
        </div>
      </div>
    </section>
  );
};

export default Subjects;
