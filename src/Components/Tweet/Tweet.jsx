import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonF from '../ButtonF/ButtonF';
import s from './Tweet.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../Store/Users/userOperation';
import FilterUsers from '../FilterUsers/FilterUsers';

const Tweet = () => {
  const [statusF, setStatus] = useState('Follow');
  //   const dispatch = useDispatch();
  const users = useSelector(store => store.users.users);
  const dispatch = useDispatch();
  const stote = useSelector(state => console.log(state.users.following));

  //   dispatch(getUsers());
  //   console.log(users);
  //   const [btnName, setBtnName] = useState('Follow');

  //   const handleClick = () => {
  //     if (btnName === 'Follow') {
  //       setBtnName('Following');
  //       return;
  //     }
  //     if (btnName === 'Following') {
  //       setBtnName('Follow');
  //       return;
  //     }
  //   };
  // dispatch(getUsers());
  useEffect(() => {
    const usersCard = async () => {
      try {
        const data = dispatch(getUsers());
        // setUsers(res);
        return data;
      } catch (error) {
        console.log(error.message);
      }
    };
    usersCard();
  }, [dispatch]);

  //   useEffect(() => {
  //     localStorage.setItem('users', JSON.stringify(users));
  //   }, [users]);

  return (
    <>
      {users && (
        <ul className={s.list}>
          <Link to={'/'}>Go to home</Link>
          {/* <FilterUsers /> */}
          {users.map(({ user, avatar, followers, tweets, id, following }, idx) => {
            // console.log(status);
            return (
              <li key={idx} className={s.listItem}>
                <h2>{user}</h2>
                <img src={avatar} alt={users} className={s.img} width="80" />
                <span className={s.text}>{tweets} tweets</span>
                <span className={s.text}>{following ? followers + 1 : followers} followers</span>
                <ButtonF
                  following={following}
                  id={id}
                  stote={stote}
                  //   setStatus={setStatus}
                  // handleClick={handleClick} btnName={btnName}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Tweet;
