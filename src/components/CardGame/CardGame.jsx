import { useContext } from "react";
import { FavoritosContexto } from "../../context/FavoritosContexto";
import "./CardGame.css";

function CardGame({ juego }) {

    const { agregarFavorito } = useContext(FavoritosContexto);

    const handleFavorito = () => {

        agregarFavorito(juego);

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
                    className="play-btn"
                    disabled={!juego.disponible}
                >

                    {juego.disponible ? "🎮 Jugar" : "🚧 Próximamente"}

                </button>

                <button
                    className="favorite-btn"
                    onClick={handleFavorito}
                >

                    👑 Hall of Fame

                </button>

            </div>

        </div>

    );

}

export default CardGame;