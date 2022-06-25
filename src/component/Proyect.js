import React from "react";
import Menu from "./Menu";

const Proyect = () => {
  return (
    <div>
      <div className="project-main">
        <Menu />
        <span className="title-project"> PROYECTOS</span>
        <span className="title-name">JUAN PABLO</span>
      </div>
      {/* Project the time */}
      <div className="app-time">
        <p className="title-time">App Clima</p>
        <p className="description-time">
          App del clima se creo consumiendo una api publica en donde la labor es
          consultar la temperatura dependiendo de la ubicacion en la que se
          encuentra se usaron tecnologias como React, JS, Css
        </p>

        <a
          className="btn_time"
          href="https://github.com/tayson87/entregable2/tree/main/src"
        >
          Desplegar
        </a>
      </div>
      {/* weather icons */}
      <div className="logoreact"></div>

      <div className="logojs"></div>

      <div className="logocss"></div>
      {/* end time */}

      {/* project phrases */}
      <div className="app-phrases">
        <p className="title-phrases">App Frases</p>
        <p className="description-phrases">
          App de frases se creo consumiendo una api publica en donde la labor es
          consultar diferentes frases celebres de diferentes autores ramdom se
          usaron tecnologias como React, JS, Css
        </p>

        <a
          className="btn_time"
          href="https://github.com/tayson87/entregableversion1/tree/main/src"
        >
          Desplegar
        </a>
      </div>
      {/* phrases  icons */}
      <div className="logoreact-phrases"></div>

      <div className="logojs-phrases"></div>

      <div className="logocss-phrases"></div>

      {/* end project phrases */}

      {/* project rick and morty */}

      <div className="app-rickandmorty">
        <p className="title-rickandmorty">App Rick y Morty</p>
        <p className="description-rickandmorty">
          App de rick y morty se creo consumiendo una api publica en donde la
          labor es consultar los diferentes personajes y ubicacion del show de
          rick y morty, se usaron tecnologias como React, JS, Css
        </p>

        <a
          className="btn_time"
          href="https://github.com/tayson87/entregableversion3/tree/main/src"
        >
          Desplegar
        </a>
      </div>
      {/* rick and morty  icons */}
      <div className="logoreact-rickandmorty"></div>

      <div className="logojs-rickandmorty"></div>

      <div className="logocss-rickandmorty"></div>

      {/* end rick and morty */}

      {/* start pokedex */}

      <div className="app-pokedex">
        <p className="title-pokedex">App Pokedex</p>
        <p className="description-pokedex">
          App Pokedex se creo consumiendo una api publica en donde la labor es
          consultar los diferentes pokemons y sus habilidades ,tipos entre otros
          , se usaron tecnologias como React, JS, Css
        </p>

        <a className="btn_time" href="https://github.com/tayson87/pokedex2.0.1">
          Desplegar
        </a>
      </div>
      {/* pokedex  icons */}
      <div className="logoreact-pokedex"></div>

      <div className="logojs-pokedex"></div>

      <div className="logocss-pokedex"></div>

      {/* end pokedex */}

      {/* start crud */}

      <div className="app-crud">
        <p className="title-crud">App Crud</p>
        <p className="description-crud">
          App Crud se creo consumiendo una api en donde la labor es crear
          ,actualizar, editar,y borrar un usuario con los verbos(GET, POST, PUT,
          DELETE) , se usaron tecnologias como React, JS, Css
        </p>

        <a
          className="btn_time"
          href="https://github.com/tayson87/formentregable"
        >
          Desplegar
        </a>
      </div>
      {/* CRUD  icons */}
      <div className="logoreact-crud"></div>

      <div className="logojs-crud"></div>

      <div className="logocss-crud"></div>
    </div>
  );
};

export default Proyect;
