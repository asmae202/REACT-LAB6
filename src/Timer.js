import { useState, useEffect } from 'react';
import './Timer.css'; // pour le style

function Timer() {
  const [secondes, setSecondes] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondes((s) => s + 1);
    }, 1000);

    // Nettoyage du timer à la suppression du composant
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="timer">
      <p>⏱️ Temps écoulé : {secondes} seconde{secondes > 1 ? 's' : ''}</p>
    </div>
  );
}

export default Timer;