import LoginForm from '../Components/Form/Login-From';
import { Section } from '../Components/Section';
import { Typography } from '@mui/material';

export default function LoginPage() {
  return (
    <Section>
      <Typography align="center" variant="h2" gutterBottom component="h2">
        Please enter
      </Typography>
      <LoginForm />
    </Section>
  );
}
