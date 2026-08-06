import "./Header.css";

function Header() {
    return (
        <header className="header">

            <button className="menu-btn">
                ☰
            </button>

            <h1 className="logo">
                MALUMAVERSE
            </h1>

            <button className="login-btn">
                ✨ Entrar
            </button>

        </header>
    );
}

export default Header;