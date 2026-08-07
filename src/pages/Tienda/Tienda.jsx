import { useContext } from "react";
import { FavoritosContexto } from "../../context/FavoritosContexto";
import "./Tienda.css";

function Tienda() {

    const {

        creditos,
        comprarRopa,
        comprarDisco,
        ropaComprada,
        discosComprados

    } = useContext(FavoritosContexto);
    const ropa = [

        {
            id: 1,
            nombre: "Chaqueta Don Juan",
            precio: 2500,
            icono: "🧥"
        },
        {
            id: 2,
            nombre: "Gorra Pretty Boy",
            precio: 1500,
            icono: "🧢"
        },
        {
            id: 3,
            nombre: "Tenis Medellín",
            precio: 3000,
            icono: "👟"
        }

    ];

    const discos = [

        {
            id: 1,
            nombre: "Papi Juancho",
            precio: 2000,
            icono: "💿"
        },
        {
            id: 2,
            nombre: "11:11",
            precio: 1800,
            icono: "💿"
        },
        {
            id: 3,
            nombre: "Don Juan",
            precio: 2500,
            icono: "💿"
        }

    ];

    return (

        <section className="tienda-page">

            <div className="wallet-card">

                <h2>🪙 Tus VerseCoins</h2>

                <span>{creditos}</span>

                <p>

                    Gana más jugando en Arcade.

                </p>

            </div>

            <section className="categoria">

                <h2>👕 Personaliza tu Avatar</h2>

                <div className="items-grid">

                    {

                        ropa.map((item) => (

                            <div
                                className="item-card"
                                key={item.id}
                            >

                                <div className="item-icon">

                                    {item.icono}

                                </div>

                                <h3>{item.nombre}</h3>

                                <p>{item.precio} VerseCoins</p>

                                <button
                                    onClick={() => comprarRopa(item)}
                                    disabled={ropaComprada.some(prenda => prenda.id === item.id)}
                                >

                                    {

                                        ropaComprada.some(prenda => prenda.id === item.id)

                                            ? "✔ Comprado"

                                            : "Comprar"

                                    }

                                </button>

                            </div>

                        ))

                    }

                </div>

            </section>

            <section className="categoria">

                <h2>💿 Colección de Discos</h2>

                <div className="items-grid">

                    {

                        discos.map((item) => (

                            <div
                                className="item-card"
                                key={item.id}
                            >

                                <div className="item-icon">

                                    {item.icono}

                                </div>

                                <h3>{item.nombre}</h3>

                                <p>{item.precio} VerseCoins</p>

                                <button
                                    onClick={() => comprarDisco(item)}
                                    disabled={discosComprados.some(disco => disco.id === item.id)}
                                >

                                    {

                                        discosComprados.some(disco => disco.id === item.id)

                                            ? "✔ Comprado"

                                            : "Comprar"

                                    }

                                </button>

                            </div>

                        ))

                    }

                </div>

            </section>

        </section>

    );

}

export default Tienda;