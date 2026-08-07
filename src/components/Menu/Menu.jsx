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

                <NavLink to="/" onClick={cerrarMenu}>
                    🏠 Portal
                </NavLink>

                <NavLink to="/juegos" onClick={cerrarMenu}>
                    🎮 Arcade
                </NavLink>

                <NavLink to="/tienda" onClick={cerrarMenu}>
                    🪙 Rewards
                </NavLink>

                <NavLink to="/favoritos" onClick={cerrarMenu}>
                    👑 Hall of Fame
                </NavLink>

                <NavLink to="/perfil" onClick={cerrarMenu}>
                    👤 MyVerse
                </NavLink>

            </div>

        </div>

    );

}

export default Menu;