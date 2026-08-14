import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const manejarLogin = async (e) => {

        e.preventDefault();

        if (!email || !password) {
            setMensaje("Por favor completa todos los campos.");
            return;
        }

        try {

            const respuesta = await axios.post(
                "http://localhost:3000/api/usuarios",
                {
                    nombre: email.split("@")[0],
                    email,
                    password
                }
            );

            console.log("Usuario registrado:", respuesta.data);

            login({
                nombre: email.split("@")[0],
                email: email
            });

            navigate("/");

        } catch (error) {

            console.error("Error con el backend:", error);

            if (error.response?.data?.mensaje) {
                setMensaje(error.response.data.mensaje);
            } else {
                setMensaje(
                    "No fue posible conectar con el servidor."
                );
            }

        }

    };

    return (

        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#11111c",
                color: "white"
            }}
        >

            <div
                style={{
                    width: "400px",
                    padding: "40px",
                    borderRadius: "20px",
                    background: "#1c1c2b",
                    boxShadow: "0 0 30px rgba(0,0,0,0.5)"
                }}
            >

                <h1 style={{ textAlign: "center" }}>
                    MALUMAVERSE
                </h1>

                <p style={{ textAlign: "center" }}>
                    Inicia sesión para entrar a tu universo.
                </p>

                <form onSubmit={manejarLogin}>

                    <label>
                        Correo electrónico
                    </label>

                    <input
                        type="email"
                        placeholder="tu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "12px",
                            marginTop: "8px",
                            marginBottom: "20px",
                            boxSizing: "border-box"
                        }}
                    />

                    <label>
                        Contraseña
                    </label>

                    <input
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "12px",
                            marginTop: "8px",
                            marginBottom: "25px",
                            boxSizing: "border-box"
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "14px",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                            background: "#d4af37",
                            color: "#111",
                            fontWeight: "bold"
                        }}
                    >
                        ✨ Entrar a MalumaVerse
                    </button>

                </form>

                {mensaje && (
                    <p
                        style={{
                            marginTop: "20px",
                            textAlign: "center"
                        }}
                    >
                        {mensaje}
                    </p>
                )}

            </div>

        </div>

    );
}

export default Login;