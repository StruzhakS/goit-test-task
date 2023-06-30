import React, { useEffect, useState } from 'react';
import s from './Button.module.css';
import { updateUser } from '../../Store/Users/userOperation';
import { useDispatch } from 'react-redux';
// import { updateUser } from '../../tweetApi';
const ButtonF = ({ id, stote, following }) => {
  const [btnName, setBtnName] = useState('Follow');
  const dispatch = useDispatch();

  const handleClick = () => {
    if (following === false) {
      //   setBtnName('Following');
      dispatch(updateUser({ id, following: true }));
      return;
    }
    if (following === true) {
      //   setBtnName('Follow');
      dispatch(updateUser({ id, following: false }));
      return;
    }
  };

  //   useEffect(() => {
  //     setBtnName(status);
  //   }, [status]);

  return (
    <button onClick={handleClick} className={!following ? s.button : s.buttonActive}>
      {following ? 'Following' : 'Follow'}
    </button>
  );
};

export default ButtonF;
