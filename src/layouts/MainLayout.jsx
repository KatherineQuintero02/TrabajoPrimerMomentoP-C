import { useState } from "react";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {

    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
        setMenuAbierto((prev) => !prev);
    };

    return (
        <>
            <Header toggleMenu={toggleMenu} />

            <Menu
                abierto={menuAbierto}
                toggleMenu={toggleMenu}
            />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default MainLayout;