import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import '../index.css';

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  // console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url]);

  return (
    <div
      className="progress-bar "
      style={{ width: progress + '%', backgroundColor: '#efb6b2' }}
    ></div>
  );
};

export default ProgressBar;
