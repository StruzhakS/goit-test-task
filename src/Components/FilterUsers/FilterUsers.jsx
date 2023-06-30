import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../Store/Users/userSlice';
import s from './FilterUsers.module.css';

const FilterUsers = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state.users);
  return (
    <select
      className={s.select}
      name="filter"
      // //   style={selectStyles}
      onChange={e => dispatch(changeFilter(e.target.value))}
      value={filter}
    >
      <option value="all">Show all </option>
      <option value="follow">Follow</option>
      <option value="following">Following</option>
    </select>
  );
};

export default FilterUsers;
