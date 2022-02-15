import React from 'react';
import styled from 'styled-components';
import { ContactItem } from '../ContactItem';
import { useFetchContactsQuery } from '../../redux/contacts/contactsApi';
import { LoaderSimbol } from '../Loader/';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/contact-selector';

const ContactStyledList = styled.ul`
  width: 450px;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

const ContactList = () => {
  const filter = useSelector(getFilter).toLowerCase();

  const { data: contacts, isFetching } = useFetchContactsQuery();
  const getFilteredContacts = contacts =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  const filtered = contacts ? getFilteredContacts(contacts) : [];

  return (
    <ContactStyledList>
      {isFetching && <LoaderSimbol />}
      {filtered &&
        filtered.map(({ name, id, number }) => (
          <ContactItem key={id} name={name} id={id} number={number} />
        ))}
    </ContactStyledList>
  );
};

export default ContactList;
