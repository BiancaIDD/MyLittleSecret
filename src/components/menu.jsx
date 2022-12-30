import React from "react";
import penguin from "../assets/penguin.svg";
import turtle from "../assets/turtle.svg";
import booksoffice from "../assets/booksoffice.svg";
import "./ccs/menu.css";

const Menu = () => {
  return (
    <div className="componentMenu">
      <div className="tittleMenu">
        <h1>Bienvenido ¿Que te gustaria hacer? </h1>
      </div>
      <div className="buttonsMenu">
        <button className="buttonPenguin">
          <img src={penguin} alt="penguin" />
          ¿Escribir tus historias?
        </button>
        <button className="buttonTurtle">
          <img src={turtle} alt="turtle" />
          Comenzar a leer
        </button>
      </div>
      <div className="buttonLogout">
        <button className="buttonoffice">
          <img src={booksoffice} alt="booksoffice" />
          cerrar sesion
        </button>
      </div>
    </div>
  );
};

export { Menu };
