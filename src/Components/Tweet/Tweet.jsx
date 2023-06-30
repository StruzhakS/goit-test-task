import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonF from '../ButtonF/ButtonF';
import s from './Tweet.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../Store/Users/userOperation';
import FilterUsers from '../FilterUsers/FilterUsers';
const LIMIT = 3;
const Tweet = () => {
  const users = useSelector(store => store.users.users);
  const filter = useSelector(store => store.users.filter);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const followingUser = users.filter(el => el.following && el);

  const followUsers = users.filter(el => !el.following && el);
  console.log(page);
  //   console.log(users.length);

  // eslint-disable-next-line no-mixed-operators
  //   const filterdUsers =
  //     (filter === 'all' && users) ||
  //     (filter === 'following' && followingUser) ||
  //     (filter === 'follow' && followUsers);

  //   useEffect(() => {
  //     const usersCard = async () => {
  //       try {
  //         const data = dispatch(getUsers({ page, limit: LIMIT }));
  //         return data;
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //     };
  //     usersCard();
  //   }, [dispatch, page]);
  useEffect(() => {
    dispatch(getUsers({ page, limit: LIMIT }));
  }, [dispatch, page]);

  //   console.log(followUsers);
  return (
    <div className={s.box}>
      <ul className={s.list}>
        <Link to={'/'}>Go to home</Link>
        <FilterUsers />
        {filter === 'all' &&
          users.map(({ user, avatar, followers, tweets, id, following }, idx) => {
            console.log('all');
            return (
              <li key={idx} className={s.listItem}>
                <h2>{user}</h2>
                <img src={avatar} alt={users} className={s.img} width="80" />
                <span className={s.text}>{tweets} tweets</span>
                <span className={s.text}>
                  {following
                    ? (followers + 1).toLocaleString('en')
                    : followers.toLocaleString('en')}
                  followers
                </span>
                <ButtonF following={following} id={id} />
              </li>
            );
          })}
        {filter === 'all' && <button onClick={() => setPage(prev => prev + 1)}>Load More</button>}
        {filter === 'following' &&
          followingUser.map(({ user, avatar, followers, tweets, id, following }, idx) => {
            console.log('following');
            return (
              <li key={idx} className={s.listItem}>
                <h2>{user}</h2>
                <img src={avatar} alt={users} className={s.img} width="80" />
                <span className={s.text}>{tweets} tweets</span>
                <span className={s.text}>
                  {following
                    ? (followers + 1).toLocaleString('en')
                    : followers.toLocaleString('en')}
                  followers
                </span>
                <ButtonF following={following} id={id} />
              </li>
            );
          })}
        {filter === 'follow' &&
          followUsers.map(({ user, avatar, followers, tweets, id, following }, idx) => {
            console.log('follow');
            return (
              <li key={idx} className={s.listItem}>
                <h2>{user}</h2>
                <img src={avatar} alt={users} className={s.img} width="80" />
                <span className={s.text}>{tweets} tweets</span>
                <span className={s.text}>
                  {following
                    ? (followers + 1).toLocaleString('en')
                    : followers.toLocaleString('en')}
                  followers
                </span>
                <ButtonF following={following} id={id} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Tweet;
