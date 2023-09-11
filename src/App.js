import './App.css';
import React, { useEffect, lazy, Suspense } from 'react';
import { Container } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import PrivateRoute from './Сomponents/PrivateRoute';
import PublicRoute from './Сomponents/PublicRoute';
import { LoaderSimbol } from './Сomponents/Loader';
import Outline from './Сomponents/Outline/Outline';
import { currentUser } from './redux/auth/auth-operations';

const HomePage = lazy(() => import('./Views/HomePage'));
const RegisterPage = lazy(() => import('./Views/Register-page'));
const LoginPage = lazy(() => import('./Views/Login-page'));
const ContactsPage = lazy(() => import('./Views/Contacts-page'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <Container>
      <Toaster
        toastOptions={{
          error: {
            duration: 2000,
          },
        }}
      />
      <Outline />
      <Suspense fallback={<LoaderSimbol />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
