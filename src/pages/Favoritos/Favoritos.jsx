import { useContext } from "react";
import { FavoritosContexto } from "../../context/FavoritosContexto";
import "./Favoritos.css";

function Favoritos() {

    const { favoritos } = useContext(FavoritosContexto);

    return (

        <section className="favoritos-page">

            <div className="favoritos-header">

                <h1>👑 Hall of Fame</h1>

                <p>

                    Aquí viven los juegos que hacen parte de tu colección premium.

                </p>

            </div>

            {

                favoritos.length === 0 ? (

                    <div className="favoritos-vacio">

                        <span>👑</span>

                        <h2>Aún no tienes favoritos</h2>

                        <p>

                            Explora el Arcade y agrega tus juegos favoritos.

                        </p>

                    </div>

                ) : (

                    <div className="favoritos-grid">

                        {

                            favoritos.map((juego) => (

                                <div
                                    key={juego.id}
                                    className="favorito-card"
                                >

                                    <div className="favorito-icon">

                                        {juego.icono}

                                    </div>

                                    <h2>{juego.nombre}</h2>

                                    <p>{juego.descripcion}</p>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </section>

    );

}

export default Favoritos;