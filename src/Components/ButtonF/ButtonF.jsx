import s from './Button.module.css';
import { updateUser } from '../../Store/Users/userOperation';
import { useDispatch } from 'react-redux';
const ButtonF = ({ id, following }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (following === false) {
      dispatch(updateUser({ id, following: true }));
      return;
    }
    if (following === true) {
      dispatch(updateUser({ id, following: false }));
      return;
    }
  };

  return (
    <button onClick={handleClick} className={!following ? s.button : s.buttonActive}>
      {following ? 'Following' : 'Follow'}
    </button>
  );
};

export default ButtonF;
