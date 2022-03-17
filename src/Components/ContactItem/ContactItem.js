import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/contacts/contactsApi';
import toast from 'react-hot-toast';

const ContactItemStyled = styled.li`
  color: black;
  margin-right: 15px;
  margin-bottom: 15px;

  :nth-last-of-type(-n + 3) {
    margin-bottom: 0;
  }

  &:hover {
    transform: scale(1.03);
  }
`;

const ContactName = styled.p`
  color: black;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const ContactItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleDelete = id => {
    deleteContact(id);
    toast.success('Contact deleted');
  };

  return (
    <ContactItemStyled key={id} id={id}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <ContactName>
            {name} : {number}
          </ContactName>
          <Button
            variant="contained"
            size="medium"
            onClick={() => handleDelete(id)}
            type="button"
          >
            Delete
          </Button>
        </CardContent>
      </Card>
    </ContactItemStyled>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
