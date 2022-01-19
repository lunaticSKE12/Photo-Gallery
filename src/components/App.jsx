import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Board from './Board';
import Login from './Login';
import Card from 'react-bootstrap/Card';
function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </div>
    </Container>
  );
}

export default App;
