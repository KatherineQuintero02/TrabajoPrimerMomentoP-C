import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu({ abierto, toggleMenu }) {

    return (

        <div className={abierto ? "menu-overlay active" : "menu-overlay"}>

            <div className="menu-panel">

                <button
                    className="cerrar-menu"
                    onClick={toggleMenu}
                >
                    ✕
                </button>

                <NavLink to="/" onClick={toggleMenu}>
                    🏠 Portal
                </NavLink>

                <NavLink to="/juegos" onClick={toggleMenu}>
                    🎮 Arcade
                </NavLink>

                <NavLink to="/tienda" onClick={toggleMenu}>
                    🪙 Rewards
                </NavLink>

                <NavLink to="/favoritos" onClick={toggleMenu}>
                    👑 Hall of Fame
                </NavLink>

                <NavLink to="/perfil" onClick={toggleMenu}>
                    👤 MyVerse
                </NavLink>

            </div>

        </div>

    );

}

export default Menu;