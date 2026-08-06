import malumaImage from "../../assets/maluma-placeholder.jpg";
import "./Hero.css";

function Hero() {

    return (

        <section className="hero">

            <div className="hero-content">

                <span className="hero-badge">

                    🎵 Bienvenido al Universo Oficial del Fan

                </span>

                <h1 className="hero-title">

                    MALUMAVERSE

                </h1>

                <p className="hero-description">

                    Juega, consigue créditos, desbloquea recompensas y conviértete en una leyenda dentro del universo de Maluma.

                </p>

                <div className="portal-card">

                    <h2>PORTAL</h2>

                    <p>Comenzar la aventura</p>

                </div>

            </div>

            <div className="hero-image">

                <img
                    src={malumaImage}
                    alt="Maluma"
                    className="maluma-photo"
                />

            </div>

        </section>

    );

}

export default Hero;