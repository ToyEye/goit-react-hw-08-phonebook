import { useState } from 'react';
import { InputType, InputText, FormStyled } from '../FormComponents';
import { signUp } from '../../redux/auth/auth-operations.js';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';

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
        <TextField
          label="Enter your name"
          variant="outlined"
          size="small"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </InputType>
      <InputType>
        <InputText>Email</InputText>
        <TextField
          label="Enter your email"
          variant="outlined"
          size="small"
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Email must contain @ sign"
          required
          value={email}
          onChange={handleChange}
        />
      </InputType>
      <InputType>
        <InputText>Password</InputText>
        <TextField
          label="Enter your password"
          variant="outlined"
          size="small"
          type="password"
          name="password"
          required
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
