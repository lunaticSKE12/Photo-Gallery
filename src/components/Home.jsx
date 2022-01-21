import React from 'react';
import UploadForm from './UploadForm';
import Title from './Title';
import '../index.css';

const Home = () => {
  return (
    <div className="App">
      <Title />
      <UploadForm />
    </div>
  );
};

export default Home;
