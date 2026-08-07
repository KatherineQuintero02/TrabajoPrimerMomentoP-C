import { useContext } from "react";
import { FavoritosContexto } from "../../context/FavoritosContexto";
import "./CardGame.css";

function CardGame({ juego }) {

    const {

        agregarFavorito,
        eliminarFavorito,
        favoritos,
        ganarCreditos

    } = useContext(FavoritosContexto);

    const esFavorito = favoritos.some(item => item.id === juego.id);

    const jugar = () => {

        if (!juego.disponible) return;

        ganarCreditos(100);

        alert("🎉 ¡Ganaste 100 VerseCoins!");

    };

    return (

        <div className="card-game">

            <div className="game-icon">

                <h1>{juego.icono}</h1>

            </div>

            <div className="game-info">

                <h2>{juego.nombre}</h2>

                <p>{juego.descripcion}</p>

            </div>

            <div className="game-actions">

                <button
                    onClick={jugar}
                    disabled={!juego.disponible}
                >

                    {

                        juego.disponible
                            ? "🎮 Jugar"
                            : "Próximamente"

                    }

                </button>

                {

                    esFavorito ? (

                        <button
                            className="btn-favorito"
                            onClick={() => eliminarFavorito(juego.id)}
                        >

                            💔 Quitar favorito

                        </button>

                    ) : (

                        <button
                            className="btn-favorito"
                            onClick={() => agregarFavorito(juego)}
                        >

                            ❤️ Agregar favorito

                        </button>

                    )

                }

            </div>

        </div>

    );

}

export default CardGame;