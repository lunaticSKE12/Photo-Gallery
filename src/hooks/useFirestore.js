import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase';

const useFirestore = (collecion) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collecion)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub();
  }, [collecion]);
  return { docs };
};

export default useFirestore;
