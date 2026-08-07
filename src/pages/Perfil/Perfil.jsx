import { useContext } from "react";
import { FavoritosContexto } from "../../context/FavoritosContexto";
import "./Perfil.css";

function Perfil() {

    const {

        favoritos,
        creditos,
        ropaComprada,
        discosComprados

    } = useContext(FavoritosContexto);

    return (

        <section className="perfil-page">

            <h1 className="perfil-title">

                👤 MyVerse

            </h1>

            <div className="perfil-grid">

                <div className="perfil-card">

                    <h2>🪙 VerseCoins</h2>

                    <h3>{creditos}</h3>

                    <p>Monedas disponibles.</p>

                </div>

                <div className="perfil-card">

                    <h2>❤️ Favoritos</h2>

                    <h3>{favoritos.length}</h3>

                    <p>Juegos guardados.</p>

                </div>

                <div className="perfil-card">

                    <h2>👕 Ropa</h2>

                    {

                        ropaComprada.length === 0

                        ? <p>No has comprado ropa.</p>

                        : (

                            ropaComprada.map((ropa)=>(

                                <div
                                    key={ropa.id}
                                    className="item-perfil"
                                >

                                    {ropa.icono} {ropa.nombre}

                                </div>

                            ))

                        )

                    }

                </div>

                <div className="perfil-card">

                    <h2>💿 Discografía</h2>

                    {

                        discosComprados.length === 0

                        ? <p>No has desbloqueado discos.</p>

                        : (

                            discosComprados.map((disco)=>(

                                <div
                                    key={disco.id}
                                    className="item-perfil"
                                >

                                    {disco.icono} {disco.nombre}

                                </div>

                            ))

                        )

                    }

                </div>

            </div>

        </section>

    );

}

export default Perfil;