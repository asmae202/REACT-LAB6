import Compteur from './Compteur';
import Clock from './Clock';
import useLocalStorage from './useLocalStorage';
import './App.css';

function App() {
  const [nom, setNom] = useLocalStorage('nom', 'Utilisateur');

  return (
    <div className="app-container">
      <h1 className="app-title">TP Hooks Avancés – Exercices facultatifs</h1>

      <section className="app-section">
        <h2>Compteur avec reset</h2>
        <Compteur />
      </section>

      <section className="app-section">
        <h2>Horloge en temps réel</h2>
        <Clock />
      </section>

      <section className="app-section">
        <h2>Nom dans localStorage</h2>
        <input
          className="localstorage-input"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Votre nom"
        />
      </section>
    </div>
  );
}

export default App;