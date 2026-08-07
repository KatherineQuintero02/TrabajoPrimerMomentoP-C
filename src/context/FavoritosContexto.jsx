import { createContext, useState } from "react";

export const FavoritosContexto = createContext();

export function FavoritosProvider({ children }) {

    const [favoritos, setFavoritos] = useState([]);
    const [creditos, setCreditos] = useState(1000);

    const [ropaComprada, setRopaComprada] = useState([]);
    const [discosComprados, setDiscosComprados] = useState([]);

    const agregarFavorito = (juego) => {

        const existe = favoritos.find(item => item.id === juego.id);

        if (!existe) {

            setFavoritos([...favoritos, juego]);

        }

    };

    const eliminarFavorito = (id) => {

        setFavoritos(favoritos.filter(item => item.id !== id));

    };

    const ganarCreditos = (cantidad) => {

        setCreditos(prev => prev + cantidad);

    };

    const comprarRopa = (prenda) => {

        if (creditos < prenda.precio) return false;

        if (ropaComprada.find(item => item.id === prenda.id)) return false;

        setCreditos(prev => prev - prenda.precio);

        setRopaComprada([...ropaComprada, prenda]);

        return true;

    };

    const comprarDisco = (disco) => {

        if (creditos < disco.precio) return false;

        if (discosComprados.find(item => item.id === disco.id)) return false;

        setCreditos(prev => prev - disco.precio);

        setDiscosComprados([...discosComprados, disco]);

        return true;

    };

    return (

        <FavoritosContexto.Provider
            value={{

                favoritos,
                agregarFavorito,
                eliminarFavorito,

                creditos,
                ganarCreditos,

                ropaComprada,
                discosComprados,

                comprarRopa,
                comprarDisco

            }}
        >

            {children}

        </FavoritosContexto.Provider>

    );

}