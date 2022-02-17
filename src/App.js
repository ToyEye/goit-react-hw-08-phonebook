import './App.css';
import React from 'react';
import { Container } from './Components/Container';
import { Footer } from './Components/Footer';
import { AppBar, Toolbar } from '@mui/material';
import ContactsPage from './Views/Contacts-page';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import HomePage from './Views/HomePage';

export default function App() {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="contacts">Contacts</NavLink>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
      <Footer />
    </Container>
  );
}
