import React, { useState } from 'react';
import UploadForm from './UploadForm';
import Title from './Title';
import '../index.css';
import ImageGrid from './ImageGrid';
import Modal from './Modal';

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default Home;
