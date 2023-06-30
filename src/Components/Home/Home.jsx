import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getUsers } from '../../Store/Users/userOperation';

const Home = () => {
  // const dispatch = useDispatch();
  // dispatch(getUsers());

  // const users = useSelector(store => store.users.users);
  return <Link to={'tweet'}>Go to tweet</Link>;
};

export default Home;
