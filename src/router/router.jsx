import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Inicio from "../pages/Inicio/Inicio";
import Juegos from "../pages/Juegos/Juegos";
import Tienda from "../pages/Tienda/Tienda";
import Favoritos from "../pages/Favoritos/Favoritos";
import Perfil from "../pages/Perfil/Perfil";
import Login from "../pages/Login/Login";

import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },

    {
        path: "/",
        element: <MainLayout />,
        children: [

            {
                index: true,
                element: (
                    <ProtectedRoute>
                        <Inicio />
                    </ProtectedRoute>
                )
            },

            {
                path: "juegos",
                element: (
                    <ProtectedRoute>
                        <Juegos />
                    </ProtectedRoute>
                )
            },

            {
                path: "tienda",
                element: (
                    <ProtectedRoute>
                        <Tienda />
                    </ProtectedRoute>
                )
            },

            {
                path: "favoritos",
                element: (
                    <ProtectedRoute>
                        <Favoritos />
                    </ProtectedRoute>
                )
            },

            {
                path: "perfil",
                element: (
                    <ProtectedRoute>
                        <Perfil />
                    </ProtectedRoute>
                )
            }

        ]
    }
]);

export default router;