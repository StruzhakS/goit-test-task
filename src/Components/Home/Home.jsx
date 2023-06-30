import React from 'react';
// import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './Home.module.css';
// import { getUsers } from '../../Store/Users/userOperation';

const Home = () => {
  // const dispatch = useDispatch();
  // dispatch(getUsers());

  // const users = useSelector(store => store.users.users);
  return (
    <NavLink className={s.homeBtn} to={'tweet'}>
      Go to tweet
    </NavLink>
  );
};

export default Home;
