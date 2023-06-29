import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../../tweetApi';
import ButtonF from '../ButtonF/ButtonF';
import s from './Tweet.module.css';

const Tweet = () => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')));
  const [statusF, setStatus] = useState('Follow');

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

  useEffect(() => {
    const usersCard = async () => {
      try {
        const res = await getUsers();
        setUsers(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    usersCard();
  }, []);
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);
  //   console.log(statusF);
  return (
    <>
      <Link to={'/'}>Go to home</Link>
      {users && (
        <ul className={s.list}>
          {users.map(({ user, avatar, followers, tweets, id, status = statusF }, idx) => {
            console.log(status);
            return (
              <li key={idx} className={s.listItem}>
                <h2>{user}</h2>
                <img src={avatar} alt={users} className={s.img} width="80" />
                <span className={s.text}>{tweets} tweets</span>
                <span className={s.text}>
                  {status === 'Following' ? followers + 1 : followers} followers
                </span>
                <ButtonF
                  status={status}
                  id={id}
                  setStatus={setStatus}
                  //   handleClick={handleClick} btnName={btnName}
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
