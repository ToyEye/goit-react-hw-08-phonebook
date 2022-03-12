import { NavLink } from 'react-router-dom';

export default function AuthBar() {
  return (
    <ul>
      <li>
        <NavLink to="register">Registration</NavLink>
      </li>
      <li>
        <NavLink to="login">Login</NavLink>
      </li>
    </ul>
  );
}
