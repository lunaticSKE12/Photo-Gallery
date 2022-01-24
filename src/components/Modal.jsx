import React from 'react';

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    // close modal by click background not image
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="enlarged picture" />
    </div>
  );
};

export default Modal;
