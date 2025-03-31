import React, { useState } from 'react';
import '../styles/login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const simularLogin = () => {
    const usuarioIngresado = document.getElementById("username").value;
    const contrasenaIngresada = document.getElementById("password").value;

    // Verifica las credenciales
    if (usuarioIngresado === "jorge" && contrasenaIngresada === "123456789qqkkkk") {
      window.location.href = "https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiKnrvyr7-CAxWprJUCHYvcA-0QPAgJ";
    } else {
      // Credenciales incorrectas, realiza alguna acción o muestra un mensaje de error
      alert("usuario o contraseña incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="view">
      <div className="container-login">
        <div className="login-text">
          <h1>Login</h1>
        </div>
        <div className="inputs-login">
          <input
            type="text"
            id="username"
            className="user-name"
            placeholder="Username :"
          />
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="pass-word"
              placeholder="Password:"
            />
            <button
              className="toggle-password"
              onClick={togglePasswordVisibility}
              tabIndex="-1"
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
        </div>
        <div className="button-login">
          <button onClick={simularLogin}>Login</button>
        </div>
      </div>
      <div className="draw-container">
        <img
          src="./src/assets/images/draw.png"
          className="draw"
          alt="no furulo we"
        />
      </div>
    </div>
  );
};

export default Login;
