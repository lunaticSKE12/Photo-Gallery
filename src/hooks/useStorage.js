import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase';
import { ref } from 'firebase/storage';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);

    storageRef.put(file).on(
      'state_changed',
      (snapshort) => {
        let percentage =
          (snapshort.bytesTransferred / snapshort.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
