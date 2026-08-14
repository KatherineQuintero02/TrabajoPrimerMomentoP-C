import { useEffect, useState } from "react";
import axios from "axios";
import CardGame from "../../components/CardGame/CardGame";
import "./Juegos.css";

function Juegos() {

    const [juegos, setJuegos] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const obtenerJuegos = async () => {

            try {

                const respuesta = await axios.get(
                    "http://localhost:3000/api/juegos"
                );

                setJuegos(respuesta.data);

            } catch (error) {

                console.error("Error obteniendo los juegos:", error);

                setError("No se pudieron cargar los juegos.");

            } finally {

                setCargando(false);

            }

        };

        obtenerJuegos();

    }, []);

    const juegosFiltrados = juegos.filter((juego) =>
        juego.nombre
            .toLowerCase()
            .includes(busqueda.toLowerCase())
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

            {cargando && (
                <p>Cargando juegos...</p>
            )}

            {error && (
                <p className="sin-resultados">
                    {error}
                </p>
            )}

            {!cargando && !error && (

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

            )}

        </section>

    );

}

export default Juegos;