import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: 'white',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

export default function AuthBar() {
  return (
    <div>
      <NavLink
        to="register"
        style={styles.link}
        activestyle={styles.activeLink}
      >
        Registration
      </NavLink>

      <NavLink to="login" style={styles.link} activestyle={styles.activeLink}>
        Login
      </NavLink>
    </div>
  );
}
