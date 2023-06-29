import React, { useEffect, useState } from 'react';
import s from './Button.module.css';
import { updateUser } from '../../tweetApi';
// import { updateUser } from '../../tweetApi';
const ButtonF = ({ status, id, setStatus }) => {
  const [btnName, setBtnName] = useState('Follow');

  const handleClick = () => {
    if (btnName === 'Follow') {
      //   console.log('Follow =>>>', btnName);
      updateUser(id, 'Following');
      setBtnName('Following');
      setStatus('Following');
      return;
    }
    if (btnName === 'Following') {
      //   console.log('Following =>>>', btnName);

      setBtnName('Follow');
      setStatus('Follow');
      updateUser(id, 'Follow');

      return;
    }
  };

  useEffect(() => {
    setBtnName(status);
  }, [status]);
  return (
    <button onClick={handleClick} className={btnName === 'Follow' ? s.button : s.buttonActive}>
      {btnName}
    </button>
  );
};

export default ButtonF;
