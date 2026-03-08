// src/CompteurRendu.js
import { useRef, useEffect, useState } from 'react';
import './CompteurRendu.css';

function CompteurRendu() {
  const compteur = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    compteur.current += 1;
    setRenderCount(compteur.current);
    console.log(`Le composant a été affiché ${compteur.current} fois.`);
  });

  return (
    <div className="compteur-card">
      <h2>Compteur de rendus avec useRef</h2>
      <p>Ce composant a été rendu <strong>{renderCount}</strong> fois.</p>
    </div>
  );
}

export default CompteurRendu;