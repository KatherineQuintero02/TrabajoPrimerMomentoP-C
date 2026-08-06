import { useState } from "react";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {

    const [menuAbierto, setMenuAbierto] = useState(false);

    const abrirMenu = () => {

        setMenuAbierto(true);

    };

    const cerrarMenu = () => {

        setMenuAbierto(false);

    };

    return (

        <>

            <Header abrirMenu={abrirMenu} />

            <Menu
                abierto={menuAbierto}
                cerrarMenu={cerrarMenu}
            />

            <main>

                <Outlet />

            </main>

            <Footer />

        </>

    );

}

export default MainLayout;