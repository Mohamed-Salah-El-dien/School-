import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import './Account.css';

const Account = () => {
  const [toggleForm, setToggleForm] = useState(true);

  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  const handleForm = () => {
    setToggleForm(!toggleForm);
  };

  const handleClick = () => {
    setRegister(!register);
    setLogin(!login);
  };

  return (
    <div className={toggleForm ? 'account-form active' : 'account-form'}>
      <div id="close-form">
        <FontAwesomeIcon icon={faTimes} size="1x" onClick={handleForm} />
      </div>
      <div className="buttons">
        <span
          className={login ? 'btn active login-btn' : 'btn login-btn'}
          onClick={handleClick}
        >
          login
        </span>
        <span
          className={register ? 'btn active register-btn' : 'btn register-btn'}
          onClick={handleClick}
        >
          register
        </span>
      </div>
      {/* ************************************************* */}
      {/* ************************************************* */}
      {/* ************************************************* */}
      <form action="" className={login ? 'login-form active' : 'login-form'}>
        <h3>login now</h3>
        <input type="email" placeholder="enter your email" className="box" />
        <input
          type="password"
          placeholder="enter your password"
          className="box"
        />
        <div className="flex">
          <input type="checkbox" name="" id="remember-me" />
          <label for="remember-me">remember me</label>
          <a href="#">forgot password?</a>
        </div>
        <input type="submit" value="login now" className="btn" />
      </form>
      {/* ************************************************* */}
      {/* ************************************************* */}
      {/* ************************************************* */}
      <form
        className={register ? 'register-form active' : 'register-form'}
        action=""
      >
        <h3>register now</h3>
        <input type="email" placeholder="enter your email" className="box" />
        <input
          type="password"
          placeholder="enter your password"
          className="box"
        />
        <input
          type="password"
          placeholder="confirm your password"
          className="box"
        />
        <input type="submit" value="register now" className="btn" />
      </form>
    </div>
  );
};

export default Account;
