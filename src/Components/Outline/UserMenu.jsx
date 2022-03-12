import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUser);
  console.log(userName);

  return (
    <div>
      <span>Добро пожаловать, {userName}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </button>
    </div>
  );
}
