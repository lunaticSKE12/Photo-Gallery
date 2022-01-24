import React, { useState } from 'react';
import UploadForm from './UploadForm';
import Title from './Title';
import '../index.css';
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import { Container } from 'react-bootstrap';

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Container>
        <Title />
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </Container>
    </div>
  );
};

export default Home;
