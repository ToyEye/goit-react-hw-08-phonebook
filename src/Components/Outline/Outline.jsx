import { AppBar, Toolbar, Box } from '@mui/material';
// import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import AuthBar from './Authbar';
import UserMenu from './UserMenu';
import Navigation from './Navigation';

export default function Outline() {
  const login = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Navigation />
          {login ? <UserMenu /> : <AuthBar />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
