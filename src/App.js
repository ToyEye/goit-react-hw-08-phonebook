import './App.css';
import React from 'react';
import { Container } from './Components/Container';
import { Footer } from './Components/Footer';
import { AppBar, Toolbar } from '@mui/material';
import ContactsPage from './Views/Contacts-page';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import HomePage from './Views/HomePage';
import RegisterPage from './Views/Register-page';
import LoginPage from './Views/Login-page';

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
            <li>
              <NavLink to="register">Registration</NavLink>
            </li>
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
      <Footer />
    </Container>
  );
}
