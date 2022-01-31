import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import '../index.css';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile, date, detail, setDate, setDetail }) => {
  const { url, progress } = useStorage(file, date, detail);
  // console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
};

export default ProgressBar;
