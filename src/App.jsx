
import { useState } from "react";
import BookCard from "./components/BookCard";

export default function App() {

  // Tableau des livres
  const [books, setBooks] = useState([
    {id: 1, titre: "L'Alchimiste", auteur: "Paulo Coelho", estDisponible: true},
    {id: 2, titre: "Les Misérables", auteur: "Victor Hugo", estDisponible: false},
    {id: 3, titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", estDisponible: true},
    {id: 4, titre: "L'Étranger", auteur: "Albert Camus", estDisponible: true}
  ]);

  // États du formulaire
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");

  // Compter les livres disponibles
  const livresDisponibles = books.filter(
    (book) => book.estDisponible
  ).length;

  // Gestion des emprunts et des retours
  const onClickEmprunt = (bookId) => {
    setBooks(
      books.map((book) =>
        book.id === bookId
          ? {...book, estDisponible: !book.estDisponible}
          : book
      )
    );
  };

  // Ajouter un nouveau livre
  const ajouterLivre = (e) => {
    e.preventDefault();

    if (titre.trim() === "" || auteur.trim() === "") {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    const nouveauLivre = {
      id: Date.now(),
      titre: titre,
      auteur: auteur,
      estDisponible: true
    };

    setBooks([...books, nouveauLivre]);

    setTitre("");
    setAuteur("");
  };

  return (
    <div>
      <h1>Bibliothèque universitaire</h1>

      <h2>Livres disponibles : {livresDisponibles}</h2>

      {/* Formulaire d'ajout */}
      <form onSubmit={ajouterLivre}>

        <input
          type="text"
          placeholder="Titre du livre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        />

        <input
          type="text"
          placeholder="Auteur du livre"
          value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
        />

        <button type="submit">Ajouter</button>

      </form>

      {/* Affichage des livres */}
      {books.map((book) => (
        <BookCard
          key={book.id}
          titre={book.titre}
          auteur={book.auteur}
          estDisponible={book.estDisponible}
          onClickEmprunt={() => onClickEmprunt(book.id)}
        />
      ))}

    </div>
  );
}
