import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const manejarLogin = (e) => {

        e.preventDefault();

        if (!email || !password) {
            alert("Por favor completa todos los campos.");
            return;
        }

        login({
            nombre: email.split("@")[0],
            email: email
        });

        navigate("/");
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

            </div>

        </div>
    );
}

export default Login;