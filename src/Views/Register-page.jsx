import RegisterForm from '../Components/Form/Register-Form';
import { Section } from '../Components/Section';
import { Typography } from '@mui/material';

export default function RegisterPage() {
  return (
    <Section>
      <Typography align="center" variant="h2" gutterBottom component="h2">
        Please register
      </Typography>
      <RegisterForm />
    </Section>
  );
}
