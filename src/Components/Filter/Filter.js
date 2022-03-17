import React from 'react';
import { InputType, InputText } from '../FormComponents';
import actions from '../../redux/contacts/contact-action';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contact-selector';
import { TextField } from '@mui/material';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handler = evt => {
    dispatch(actions.filterChange(evt.target.value));
  };

  return (
    <InputType>
      <InputText>Find contact by name</InputText>
      <TextField
        label="Filter"
        variant="outlined"
        size="small"
        type="text"
        value={filter}
        onChange={handler}
      />
    </InputType>
  );
};

export default Filter;
