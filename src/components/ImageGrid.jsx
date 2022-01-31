import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { InputGroup, FormControl } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ImageGrid = ({ setSelectedImg, setDetail, setDate }) => {
  const { docs } = useFirestore('images');
  // console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div key={uuidv4()}>
            <motion.div
              className="img-wrap"
              key={doc.id}
              whileHover={{ opacity: 1 }}
              layout
              onClick={() => {
                setSelectedImg(doc.url);
                setDetail(doc.detail);
                setDate(doc.date);
              }}
            >
              <motion.img
                src={doc.url}
                alt="uploaded picture"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
            </motion.div>
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
