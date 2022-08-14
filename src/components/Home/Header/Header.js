import React, { useState } from 'react';
import Account from './Account form/Account';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faLightbulb,
  faUser,
  faBars,
} from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [toggleUser, setToggleUser] = useState(false);
  const [togglebars, setTogglebars] = useState(false);

  const handleUser = () => {
    setToggleUser(!toggleUser);
  };

  const handleBars = () => {
    setTogglebars(!togglebars);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <FontAwesomeIcon icon={faLightbulb} className="i" />
        School
      </Link>

      <nav className={togglebars ? 'navbar active' : 'navbar'}>
        <div id="close-navbar">
          <FontAwesomeIcon icon={faTimes} onClick={handleBars} />
        </div>
        <Link to="/" className="a">
          Home
        </Link>
        <Link to="/about" className="a">
          About
        </Link>
        <Link to="/courses" className="a">
          Courses
        </Link>
        <Link to="/contact" className="a">
          Contact
        </Link>
      </nav>

      <div className="icons">
        <div id="account-btn">
          <FontAwesomeIcon icon={faUser} onClick={handleUser} />
        </div>

        <div id="menu-btn">
          <FontAwesomeIcon icon={faBars} onClick={handleBars} />
        </div>

        {toggleUser ? <Account /> : <div />}
      </div>
    </header>
  );
};

export default Header;
