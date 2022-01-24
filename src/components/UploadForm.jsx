import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [detail, setDetail] = useState('');
  const [date, setDate] = useState('');

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let select = e.target.files[0];
    setSelected(select);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // console.log(selected);
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };

  return (
    <Form.Group controlId="formFile" className="mb-3 col-sm-5 mx-auto">
      <Form.Label>
        <Form.Control type="file" onChange={changeHandler} />
      </Form.Label>

      <>
        <Form.Group controlId="floatingTextarea" className="mb-3">
          <Form.Control
            as="textarea"
            style={{ height: '100px' }}
            placeholder="Detail"
            onChange={(e) => setDetail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="floatingTextarea2">
          <Form.Control
            type="text"
            placeholder="Date e.g. 12/1/22"
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="mt-3"
          onClick={handleUpload}
        >
          Upload
        </Button>
      </>

      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && (
          <ProgressBar
            file={file}
            setFile={setFile}
            detail={detail}
            date={date}
          />
        )}
      </div>
    </Form.Group>
  );
};

export default UploadForm;
