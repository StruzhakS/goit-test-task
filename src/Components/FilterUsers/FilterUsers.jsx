import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../Store/Users/userSlice';

const FilterUsers = () => {
  const dispatch = useDispatch();
  //   const filter = useSelector(selectTodoFilter);
  return (
    <select
      name="filter"
      // //   style={selectStyles}
      onChange={e => dispatch(changeFilter(e.target.value))}
      //   value={filter}
    >
      <option value="all">Show all </option>
      <option value="follow">Follow</option>
      <option value="following">Following</option>
    </select>
  );
};

export default FilterUsers;
