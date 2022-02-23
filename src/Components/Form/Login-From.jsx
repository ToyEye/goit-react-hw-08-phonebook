import { useState } from 'react';
import {
  InputEnter,
  InputType,
  InputText,
  FormStyled,
} from '../FormComponents';
import { logIn } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

export default function LoginForm() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'password':
        setPassword(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputType>
        <InputText>Email</InputText>
        <InputEnter
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Email must contain @ sign"
          required
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
        />
      </InputType>
      <InputType>
        <InputText>Password</InputText>
        <InputEnter
          type="password"
          name="password"
          required
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
        />
      </InputType>
      <Button variant="contained" size="medium" type="submit">
        Enter
      </Button>
    </FormStyled>
  );
}
