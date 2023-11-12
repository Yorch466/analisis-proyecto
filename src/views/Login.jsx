import React from 'react';
import '../styles/login.css';

const Login = () => {
  const simularLogin = () => {
    
    const usuarioFicticio = "usuarioEjemplo";
    const contrasenaFicticia = "contrasenaEjemplo";

    document.getElementById("username").value = usuarioFicticio;
    document.getElementById("password").value = contrasenaFicticia;

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
            placeholder="Username:"
          />
          <input
            type="password"
            id="password"
            className="pass-word"
            placeholder="Password:"
          />
        </div>
        <div className="button-login">
          {/* Utiliza el elemento a para redirigir */}
          <a href="https://www.google.com.bo/?&hl=es">
            <button onClick={simularLogin}>Login</button>
          </a>
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
