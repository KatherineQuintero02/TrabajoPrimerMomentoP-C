import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu({ abierto, cerrarMenu }) {

    return (

        <div className={abierto ? "menu-overlay active" : "menu-overlay"}>

            <div className="menu-panel">

                <button
                    className="cerrar-menu"
                    onClick={cerrarMenu}
                >
                    ✕
                </button>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                    onClick={cerrarMenu}
                >
                    🏠 Portal
                </NavLink>

                <NavLink
                    to="/juegos"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                    onClick={cerrarMenu}
                >
                    🎮 Arcade
                </NavLink>

                <NavLink
                    to="/tienda"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                    onClick={cerrarMenu}
                >
                    🪙 Rewards
                </NavLink>

                <NavLink
                    to="/favoritos"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                    onClick={cerrarMenu}
                >
                    👑 Hall of Fame
                </NavLink>

                <NavLink
                    to="/perfil"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                    onClick={cerrarMenu}
                >
                    👤 MyVerse
                </NavLink>

            </div>

        </div>

    );

}

export default Menu;