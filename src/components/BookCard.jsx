
export default function BookCard({
  titre,
  auteur,
  estDisponible,
  onClickEmprunt
}) {
  return (
    <div style={{
      border: "2px solid gray",
      borderRadius: "10px",
      padding: "20px",
      margin: "10px"
    }}>

      <h3>{titre}</h3>

      <p>Auteur : {auteur}</p>

      <p>
        {estDisponible ? "🟢 Disponible" : "Emprunté"}
      </p>

      <button onClick={onClickEmprunt}>
        {estDisponible ? "🔴Emprunter" : "Rendre"}
      </button>

    </div>
  );
}
