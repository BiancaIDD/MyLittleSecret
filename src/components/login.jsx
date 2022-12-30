import React from "react";
import bookStart from "../assets/bookStart.svg";
import bookRegister from "../assets/bookRegister.svg";
import GoogleIcon from "@mui/icons-material/Google";
import "../components/ccs/login.css";

function Register() {
  return (
    <div className="componentLogIn">
      <form className="formRegister">
        <h2>Registrar</h2>
        <label name="user">Nuevo usuario:</label>
        <input
          id="user"
          type={"text"}
          placeholder="   ingresa tu usuario"
          required
        />
        <label name="email">Ingresa tu correo:</label>
        <input
          id="email"
          type={"email"}
          placeholder="   ingresa tu correo"
          required
        />
        <label name="password">Contraseña:</label>
        <input
          id="password"
          type={"password"}
          placeholder="   ingresa tu contraseña"
          required
        />
        <label name="password">Repite tu contraseña:</label>
        <input
          id="password"
          type={"password"}
          placeholder="   repite tu contraseña"
          required
        />
        <fieldset className="buttonsIniReg">
          <button className="startButton">
            <img src={bookStart} alt="bookStart" />
            Regresar
          </button>
          <button className="registerButton">
            <img src={bookRegister} alt="bookregister" />
            Registrar
          </button>
        </fieldset>
        <label name="sesion">o inicia sesion con</label>
        <button className="googleIcon">
          <GoogleIcon />
        </button>
      </form>
    </div>
  );
}

const LogIn = () => {
  return (
    <div className="componentLogIn">
      <form className="formLogIn">
        <h2>Iniciar sesion</h2>
        <label name="user">Usuario:</label>
        <input
          id="user"
          type={"text"}
          placeholder="   ingresa tu usuario"
          required
        />
        <label name="password">Contraseña:</label>
        <input
          id="password"
          type={"password"}
          placeholder="   ingresa tu contraseña"
          required
        />
        <fieldset className="buttonsIniReg">
          <button className="startButton">
            <img src={bookStart} alt="bookStart" />
            Iniciar
          </button>
          <button className="registerButton">
            <img src={bookRegister} alt="bookregister" />
            Registrar
          </button>
        </fieldset>
        <label name="sesion">o inicia sesion con</label>
        <button className="googleIcon">
          <GoogleIcon />
        </button>
      </form>
    </div>
  );
};

export { LogIn, Register };
