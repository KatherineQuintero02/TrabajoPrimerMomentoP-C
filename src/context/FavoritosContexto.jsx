import { createContext, useState } from "react";

export const FavoritosContexto = createContext();

export function FavoritosProvider({ children }) {

  const agregarFavorito = (juego) => {

    const existe = favoritos.find(item => item.id === juego.id);

    if (!existe) {

      setFavoritos((prev) => [...prev, juego]);

    }

  };

  return (

    <FavoritosContexto.Provider
      value={{
        favoritos,
        agregarFavorito
      }}
    >
      {children}
    </FavoritosContexto.Provider>

  );

}