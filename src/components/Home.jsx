import React from 'react';
import UploadForm from './UploadForm';
import Title from './Title';
import '../index.css';
import ImageGrid from './ImageGrid';

const Home = () => {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
};

export default Home;
