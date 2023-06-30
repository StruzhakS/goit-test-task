import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ButtonF from '../ButtonF/ButtonF';
import s from './Tweet.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../Store/Users/userOperation';
import FilterUsers from '../FilterUsers/FilterUsers';
import goit from '../../img/goit.png';

const LIMIT = 3;
const Tweet = () => {
  const users = useSelector(store => store.users.users);
  const filter = useSelector(store => store.users.filter);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const followingUser = users.filter(el => el.following && el);

  const followUsers = users.filter(el => !el.following && el);

  useEffect(() => {
    users.length === 0 && dispatch(getUsers({ page, limit: LIMIT }));
  }, [dispatch, page, users.length]);

  const handleClick = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    page > 1 && dispatch(getUsers({ page, limit: LIMIT }));
  }, [dispatch, page]);

  return (
    <div className={s.box}>
      <div className={s.boxWrapper}>
        <NavLink className={s.backBtn} to={'/'}>
          Go to home
        </NavLink>
        <FilterUsers />
      </div>
      <ul className={s.list}>
        {filter === 'all' &&
          users.map(({ user, avatar, followers, tweets, id, following }, idx) => {
            return (
              <li key={idx} className={s.listItem}>
                <img src={goit} alt="" width="76px" className={s.imgGoit} />
                <img src={avatar} alt={users} className={s.img} width="80" />
                <span className={s.text}>{tweets} tweets</span>
                <span className={s.text}>
                  {following
                    ? (followers + 1).toLocaleString('en')
                    : followers.toLocaleString('en')}{' '}
                  followers
                </span>
                <ButtonF following={following} id={id} />
              </li>
            );
          })}

        {filter === 'following' &&
          followingUser.map(({ user, avatar, followers, tweets, id, following }, idx) => {
            console.log('following');
            return (
              <li key={idx} className={s.listItem}>
                <img src={goit} alt="" width="76px" className={s.imgGoit} />
                <img src={avatar} alt={users} className={s.img} width="80" />
                <span className={s.text}>{tweets} tweets</span>
                <span className={s.text}>
                  {following
                    ? (followers + 1).toLocaleString('en')
                    : followers.toLocaleString('en')}{' '}
                  followers
                </span>
                <ButtonF following={following} id={id} />
              </li>
            );
          })}
        {filter === 'follow' &&
          followUsers.map(({ user, avatar, followers, tweets, id, following }, idx) => {
            return (
              <li key={idx} className={s.listItem}>
                <img src={goit} alt="" width="76px" className={s.imgGoit} />
                <img src={avatar} alt={users} className={s.img} width="80" />
                <span className={s.text}>{tweets} tweets</span>
                <span className={s.text}>
                  {following
                    ? (followers + 1).toLocaleString('en')
                    : followers.toLocaleString('en')}{' '}
                  followers
                </span>
                <ButtonF following={following} id={id} />
              </li>
            );
          })}
      </ul>
      {filter === 'all' && users.length % 3 === 0 && (
        <button className={s.loadMore} onClick={handleClick}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Tweet;
