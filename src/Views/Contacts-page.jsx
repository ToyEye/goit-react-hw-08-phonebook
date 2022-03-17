import ContactForm from '../Components/Form/Contact-Form';
import { Section } from '../Components/Section';
import ContactList from '../Components/ContactList';
import Filter from '../Components/Filter';
import { Typography } from '@mui/material';

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
