import React, { useState } from 'react';
import s from './Button.module.css';
const ButtonF = ({ id }) => {
  const [btnName, setBtnName] = useState('Follow');
  const handleClick = () => {
    if (btnName === 'Follow') {
      setBtnName('Following');
      return;
    }
    if (btnName === 'Following') {
      setBtnName('Follow');
      return;
    }
  };

  return (
    <button id={id} onClick={handleClick} className={s.button}>
      {btnName}
    </button>
  );
};

export default ButtonF;
