import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Home.module.css';

const Home = () => {
  return (
    <NavLink className={s.homeBtn} to={'tweet'}>
      Go to tweet
    </NavLink>
  );
};

export default Home;
