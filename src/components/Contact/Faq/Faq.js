import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/fontawesome-free-solid';
import './Faq.css';

const Faq = () => {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);

  const handleClick1 = () => {
    setToggle1(!toggle1);
  };

  const handleClick2 = () => {
    setToggle2(!toggle2);
  };

  const handleClick3 = () => {
    setToggle3(!toggle3);
  };

  const handleClick4 = () => {
    setToggle4(!toggle4);
  };

  const handleClick5 = () => {
    setToggle5(!toggle5);
  };

  const handleClick6 = () => {
    setToggle6(!toggle6);
  };

  return (
    <div>
      <section className="faq">
        <h1 className="heading">frequently asked questions</h1>

        <div className="accordion-container">
          <div
            onClick={handleClick1}
            className={toggle1 ? 'accordion active' : 'accordion'}
          >
            <div className="accordion-heading">
              <h3>how to contact for help?</h3>
              <FontAwesomeIcon icon={faAngleDoubleDown} className="i" />
            </div>
            <p className="accordion-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              consequatur molestias deserunt facere laborum doloremque fuga,
              quae aut. Recusandae officia quis temporibus! Magnam mollitia
              nostrum voluptatibus deserunt quidem. Natus, quo.
            </p>
          </div>

          <div
            onClick={handleClick2}
            className={toggle2 ? 'accordion active' : 'accordion'}
          >
            <div className="accordion-heading">
              <h3>what is the best career in 2022?</h3>
              <FontAwesomeIcon icon={faAngleDoubleDown} className="i" />
            </div>
            <p className="accordion-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              consequatur molestias deserunt facere laborum doloremque fuga,
              quae aut. Recusandae officia quis temporibus! Magnam mollitia
              nostrum voluptatibus deserunt quidem. Natus, quo.
            </p>
          </div>

          <div
            onClick={handleClick3}
            className={toggle3 ? 'accordion active' : 'accordion'}
          >
            <div className="accordion-heading">
              <h3>how much fees for web development?</h3>
              <FontAwesomeIcon icon={faAngleDoubleDown} className="i" />
            </div>
            <p className="accordion-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              consequatur molestias deserunt facere laborum doloremque fuga,
              quae aut. Recusandae officia quis temporibus! Magnam mollitia
              nostrum voluptatibus deserunt quidem. Natus, quo.
            </p>
          </div>

          <div
            onClick={handleClick4}
            className={toggle4 ? 'accordion active' : 'accordion'}
          >
            <div className="accordion-heading">
              <h3>can I choose my own tutor?</h3>
              <FontAwesomeIcon icon={faAngleDoubleDown} className="i" />
            </div>
            <p className="accordion-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              consequatur molestias deserunt facere laborum doloremque fuga,
              quae aut. Recusandae officia quis temporibus! Magnam mollitia
              nostrum voluptatibus deserunt quidem. Natus, quo.
            </p>
          </div>

          <div
            onClick={handleClick5}
            className={toggle5 ? 'accordion active' : 'accordion'}
          >
            <div className="accordion-heading">
              <h3>what payment methods are availabe?</h3>
              <FontAwesomeIcon icon={faAngleDoubleDown} className="i" />
            </div>
            <p className="accordion-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              consequatur molestias deserunt facere laborum doloremque fuga,
              quae aut. Recusandae officia quis temporibus! Magnam mollitia
              nostrum voluptatibus deserunt quidem. Natus, quo.
            </p>
          </div>

          <div
            onClick={handleClick6}
            className={toggle6 ? 'accordion active' : 'accordion'}
          >
            <div className="accordion-heading">
              <h3>can I have free trial for a month?</h3>
              <FontAwesomeIcon icon={faAngleDoubleDown} className="i" />
            </div>
            <p className="accordion-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              consequatur molestias deserunt facere laborum doloremque fuga,
              quae aut. Recusandae officia quis temporibus! Magnam mollitia
              nostrum voluptatibus deserunt quidem. Natus, quo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
