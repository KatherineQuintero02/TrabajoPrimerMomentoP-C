import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Inicio from "../pages/Inicio/Inicio";
import Juegos from "../pages/Juegos/Juegos";
import Tienda from "../pages/Tienda/Tienda";
import Favoritos from "../pages/Favoritos/Favoritos";
import Perfil from "../pages/Perfil/Perfil";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [

            {
                index: true,
                element: <Inicio />
            },

            {
                path: "juegos",
                element: <Juegos />
            },

            {
                path: "tienda",
                element: <Tienda />
            },

            {
                path: "favoritos",
                element: <Favoritos />
            },

            {
                path: "perfil",
                element: <Perfil />
            }

        ]
    }
]);

export default router;