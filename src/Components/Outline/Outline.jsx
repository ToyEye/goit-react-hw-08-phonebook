import { AppBar, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import AuthBar from './Authbar';
import UserMenu from './UserMenu';

export default function Outline() {
  const login = useSelector(authSelectors.getIsLoggedIn);
  console.log(login);
  return (
    <AppBar position="static">
      <Toolbar>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="contacts">Contacts</NavLink>
          </li>
          <li>{login ? <UserMenu /> : <AuthBar />}</li>
        </ul>
      </Toolbar>
    </AppBar>
  );
}
