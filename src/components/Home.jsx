import React, { useState } from 'react';
import UploadForm from './UploadForm';
import Title from './Title';
import '../index.css';
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import { Container, Card, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [detail, setDetail] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  };
  return (
    <div className="App">
      <Container>
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
        <Title />
        <UploadForm />
        <ImageGrid
          setSelectedImg={setSelectedImg}
          setDetail={setDetail}
          setDate={setDate}
        />
        {selectedImg && (
          <Modal
            selectedImg={selectedImg}
            setSelectedImg={setSelectedImg}
            detail={detail}
            date={date}
          />
        )}
      </Container>
    </div>
  );
};

export default Home;
