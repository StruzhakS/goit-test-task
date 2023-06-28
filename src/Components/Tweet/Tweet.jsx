import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers, updateUser } from '../../tweetApi';
import ButtonF from '../ButtonF/ButtonF';
import s from './Tweet.module.css';

const Tweet = () => {
  const [users, setUsers] = useState(null);

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
  const id = 3;
  //   updateUser(id);
  return (
    <>
      <Link to={'/'}>Go to home</Link>
      {users && (
        <ul className={s.list}>
          {users.map(({ user, avatar, followers, tweets, id }, idx) => (
            <li key={idx} className={s.listItem}>
              <h2>{user}</h2>
              <img src={avatar} alt={users} className={s.img} width="80" />
              <span>{followers} followers</span>
              <span>{tweets} tweets</span>
              <ButtonF id={id} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Tweet;
