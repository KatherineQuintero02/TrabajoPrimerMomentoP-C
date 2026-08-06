import { useContext } from "react";
import { FavoritosContexto } from "../../context/FavoritosContexto";

function Favoritos() {

    const { favoritos } = useContext(FavoritosContexto);

    return (

        <div>

            <h1>❤️ Mis Favoritos</h1>

            {
                favoritos.length === 0 ? (

                    <p>No has agregado ningún juego todavía.</p>

                ) : (

                    favoritos.map((juego) => (

                        <div key={juego.id}>

                            <h2>{juego.icono} {juego.nombre}</h2>

                            <p>{juego.descripcion}</p>

                        </div>

                    ))

                )
            }

        </div>

    );

}

export default Favoritos;