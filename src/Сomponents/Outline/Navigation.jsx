import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: 'white',
    fontSize: '1rem',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" style={styles.link} activestyle={styles.activeLink}>
        Home
      </NavLink>

      <NavLink
        to="contacts"
        style={styles.link}
        activestyle={styles.activeLink}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
