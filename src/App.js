import './App.css';
import React from 'react';
import { Container } from './Components/Container';
import { Footer } from './Components/Footer';
import ContactsPage from './Views/Contacts-page';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Views/HomePage';
import RegisterPage from './Views/Register-page';
import LoginPage from './Views/Login-page';
import Outline from './Components/Outline/Outline';

export default function App() {
  return (
    <Container>
      <Outline />
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
