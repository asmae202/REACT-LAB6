// src/FocusInput.js
import { useRef } from 'react';
import './FocusInput.css';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="focus-card">
      <h2>Focus automatique avec useRef</h2>

      <input
        ref={inputRef}
        placeholder="Tapez ici..."
        className="focus-input"
      />

      <button onClick={handleClick} className="focus-button">
        Mettre le focus
      </button>
    </div>
  );
}

export default FocusInput;