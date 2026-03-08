import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    let estMonte = true; // pour vérifier si le composant est monté
    setChargement(true);
    setErreur(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (estMonte) setData(data);
      })
      .catch((err) => {
        if (estMonte) setErreur(err);
      })
      .finally(() => {
        if (estMonte) setChargement(false);
      });

    // nettoyage à la destruction du composant
    return () => {
      estMonte = false;
    };
  }, [url]);

  return { data, chargement, erreur };
}

export default useFetch;