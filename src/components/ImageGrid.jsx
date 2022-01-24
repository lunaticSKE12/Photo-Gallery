import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { InputGroup, FormControl } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ImageGrid = ({ setSelectedImg }) => {
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
              onClick={() => setSelectedImg(doc.url)}
            >
              <motion.img
                src={doc.url}
                alt="uploaded picture"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
            </motion.div>
            <InputGroup className="mb-3 mt-3" key={uuidv4()}>
              <FormControl
                as="textarea"
                aria-label="With textarea"
                value={doc.detail}
                disabled
              />
            </InputGroup>
            <InputGroup key={uuidv4()}>
              <InputGroup.Text id="inputGroup-sizing-default">
                Date
              </InputGroup.Text>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                disabled
                value={doc.date}
              />
            </InputGroup>
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
