import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Sobre Mim</h3>
        <p>
          Graduando em Sistemas de Informação, buscando me especializar em Front
          End. Desde 2020, venho construindo aplicações web escaláveis, APIS,
          microsserviços, utilizando principalmente HTML, CSS, Javascript,
          Typescript, Node.js. . Usei outras tecnologias também ao longo do
          caminho, mas durante minha carreira o foco sempre esteve em Front End,
          usando tecnologias como React / Angular / Vue.
        </p>
      </div>
      <div className="about-img">
        <img src="" width="400" height="360" alt="about" />
      </div>
    </div>
  );
};

export default About;
