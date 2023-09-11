import { Typography } from '@mui/material';

import LoginForm from '../Сomponents/Form/Login-From';
import { Section } from '../Сomponents/Section';

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
