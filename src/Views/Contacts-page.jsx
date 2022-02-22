import ContactForm from '../Components/Form/Contact-Form';
import { Section, Title } from '../Components/Section';
import ContactList from '../Components/ContactList';
import Filter from '../Components/Filter';
import { Toaster } from 'react-hot-toast';

export default function ContactsPage() {
  return (
    <>
      <Toaster
        toastOptions={{
          error: {
            duration: 2000,
          },
        }}
      />
      <Section>
        <Title>Phonebook</Title>
        <ContactForm />
      </Section>
      <Section>
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
