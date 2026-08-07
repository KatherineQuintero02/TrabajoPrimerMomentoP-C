import { useContext } from "react";
import { FavoritosContexto } from "../../context/FavoritosContexto";
import "./Header.css";

function Header({ abrirMenu }) {

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
                    onClick={abrirMenu}
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