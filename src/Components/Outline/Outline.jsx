import { AppBar, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import AuthBar from './Authbar';
import UserMenu from './UserMenu';
import Navigation from './Navigation';

export default function Outline() {
  const login = useSelector(authSelectors.getIsLoggedIn);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#0c355e' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Navigation />
        {login ? <UserMenu /> : <AuthBar />}
      </Toolbar>
    </AppBar>
  );
}
