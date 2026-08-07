import { useState } from "react";
import { juegos } from "../../data/juegos";
import CardGame from "../../components/CardGame/CardGame";
import "./Juegos.css";

function Juegos() {

    const [busqueda, setBusqueda] = useState("");

    const juegosFiltrados = juegos.filter((juego) =>
        juego.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (

        <section className="juegos-page">

            <div className="juegos-header">

                <h1>🎮 Arcade</h1>

                <p>

                    Descubre todos los desafíos del universo MalumaVerse.

                </p>

                <input
                    type="text"
                    placeholder="Buscar un juego..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />

            </div>

            <div className="games-grid">

                {juegosFiltrados.length > 0 ? (

                    juegosFiltrados.map((juego) => (

                        <CardGame
                            key={juego.id}
                            juego={juego}
                        />

                    ))

                ) : (

                    <p className="sin-resultados">

                        No se encontraron juegos.

                    </p>

                )}

            </div>

        </section>

    );

}

export default Juegos;