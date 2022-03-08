import { useState } from 'react';
import {
  InputEnter,
  InputType,
  InputText,
  FormStyled,
} from '../FormComponents';
import { signUp } from '../../redux/auth/auth-operations.js';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(signUp({ name, password, email }));
    reset();
  };

  const reset = () => {
    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputType>
        <InputText>Name</InputText>
        <InputEnter
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter your name"
          required
          value={name}
          onChange={handleChange}
        />
      </InputType>
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
        Register
      </Button>
    </FormStyled>
  );
}
