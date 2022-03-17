import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import authSelectors from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUser);

  return (
    <div style={styles.container}>
      <Typography
        sx={{
          fontWeight: 700,
          marginRight: '12px',
          fontFamily: 'roboto, sans-serif',
        }}
        component="span"
      >
        Welcome, {userName}
      </Typography>
      <Button
        variant="contained"
        type="button"
        sx={{
          color: 'white',
          background: '#c42828',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: '#a62828',
          },
        }}
        size="small"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
}
