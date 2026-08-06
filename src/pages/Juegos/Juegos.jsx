import { useState } from "react";
import { juegos } from "../../data/juegos";
import CardGame from "../../components/CardGame/CardGame";

function Juegos() {
  const [busqueda, setBusqueda] = useState("");

  const juegosFiltrados = juegos.filter((juego) =>
    juego.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h1>🎮 Minijuegos</h1>

      <input
        type="text"
        placeholder="Buscar juego..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {juegosFiltrados.map((juego) => (
        <CardGame key={juego.id} juego={juego} />
      ))}
    </div>
  );
}

{
  juegosFiltrados.length > 0 ? (
    juegosFiltrados.map((juego) => (
      <CardGame key={juego.id} juego={juego} />
    ))
  ) : (
  <p>No se encontraron juegos.</p>
)
}

export default Juegos;