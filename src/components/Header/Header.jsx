import { useContext } from "react";
import { FavoritosContexto } from "../../context/FavoritosContexto";
import { useAuth } from "../../context/AuthContext";
import "./Header.css";

function Header({ toggleMenu }) {

    const { creditos } = useContext(FavoritosContexto);

    const { usuario, logout } = useAuth();

    const manejarCerrarSesion = () => {
        logout();
    };

    return (

        <header className="header">

            <h1 className="logo">
                MALUMAVERSE
            </h1>

            <div className="header-buttons">

                <div className="credits-box">
                    🪙 {creditos}
                </div>

                <button
                    className="menu-btn"
                    onClick={toggleMenu}
                >
                    ☰
                </button>

                {usuario && (
                    <button
                        className="login-btn"
                        onClick={manejarCerrarSesion}
                    >
                        🚪 Cerrar sesión
                    </button>
                )}

            </div>

        </header>

    );
}

export default Header;