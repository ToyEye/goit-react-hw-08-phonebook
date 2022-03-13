import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import authSelectors from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import ExitToApp from '@mui/icons-material/ExitToApp';

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
  icon: {
    color: 'black',
    padding: 2,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUser);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Добро пожаловать, {userName}</span>
      <Button
        variant="contained"
        type="button"
        color="secondary"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        <ExitToApp style={styles.icon} />
        Выйти
      </Button>
    </div>
  );
}
