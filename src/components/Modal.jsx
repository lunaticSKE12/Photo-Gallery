import React from 'react';
import { motion } from 'framer-motion';
import { InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';

const Modal = ({ selectedImg, setSelectedImg, detail, date }) => {
  const handleClick = (e) => {
    // close modal by click background not image
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged picture"
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
      <Container>
        <InputGroup className="mb-3 " size="sm">
          <FormControl
            as="textarea"
            aria-label="With textarea"
            value={detail}
            disabled
          />
          <InputGroup.Text id="inputGroup-sizing-default">Date</InputGroup.Text>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            disabled
            value={date}
          />
        </InputGroup>
      </Container>
    </motion.div>
  );
};

export default Modal;
