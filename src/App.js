import './App.css';
import React, { useEffect } from 'react';
import { Container } from './Components/Container';
import { Footer } from './Components/Footer';
import ContactsPage from './Views/Contacts-page';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Views/HomePage';
import RegisterPage from './Views/Register-page';
import LoginPage from './Views/Login-page';
import Outline from './Components/Outline/Outline';
import { currentUser } from './redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

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
