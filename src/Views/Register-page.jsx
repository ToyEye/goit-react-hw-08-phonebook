import { Typography } from '@mui/material';

import RegisterForm from '../Сomponents/Form/Register-Form';
import { Section } from '../Сomponents/Section';

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
