import { useContext } from "react";
import { FavoritosContexto } from "../../context/FavoritosContexto";
import "./Header.css";

function Header({ toggleMenu }) {
    const { creditos } = useContext(FavoritosContexto);

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

                <button className="login-btn">

                    ✨ Entrar

                </button>

            </div>

        </header>

    );

}

export default Header;