import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { FavoritosProvider } from "./context/FavoritosContexto";

import router from "./router/router";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritosProvider>
      <RouterProvider router={router} />
    </FavoritosProvider>
  </React.StrictMode>
);