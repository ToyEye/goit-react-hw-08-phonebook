import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from '@mui/material';
import { InputType, InputText, FormStyled } from '../FormComponents';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from '../../redux/contacts/contactsApi.js';
import { TextField } from '@mui/material';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact] = useAddContactMutation();
  const { data } = useFetchContactsQuery();

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async evt => {
    evt.preventDefault();

    if (
      data.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      toast.error('Contact exists!');
      return;
    } else {
      toast.success('Contact added');
      await createContact({ name, number });
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputType>
        <InputText>Name</InputText>
        <TextField
          label="Enter name"
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
        <InputText>Number</InputText>
        <TextField
          label="Enter number"
          variant="outlined"
          size="small"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </InputType>
      <Button variant="contained" size="medium" type="submit">
        Add contact
      </Button>
    </FormStyled>
  );
}
