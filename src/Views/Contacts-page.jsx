import { Typography } from '@mui/material';

import ContactForm from '../Сomponents/Form/Contact-Form';
import { Section } from '../Сomponents/Section';
import ContactList from '../Сomponents/ContactList';
import Filter from '../Сomponents/Filter';

export default function ContactsPage() {
  return (
    <>
      <Section>
        <Typography align="center" variant="h3" gutterBottom component="h1">
          Phonebook
        </Typography>
        <ContactForm />
      </Section>
      <Section>
        <Typography align="center" variant="h3" gutterBottom component="h1">
          Contacts
        </Typography>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
