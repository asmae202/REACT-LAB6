import useFetch from './useFetch';
import './ListeArticles.css'; // si tu veux ajouter du style

function ListeArticles() {
  const { data, chargement, erreur } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (chargement) return <p>Chargement en cours...</p>;
  if (erreur) return <p>Erreur : {erreur.message}</p>;

  // Vérifie que data est bien un tableau
  if (!Array.isArray(data)) return <p>Aucun article trouvé</p>;

  return (
    <ul className="liste-articles">
      {data.map((article) => (
        <li key={article.id} className="article-item">
          {article.title}
        </li>
      ))}
    </ul>
  );
}

export default ListeArticles;