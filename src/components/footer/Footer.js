import React from "react";
import "./Footer.css";

// Recordendo que el font-awesome sirve para un formato de logo y mas. les deje el link en el README.md

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Caio Freitas</h1>
        {/* <p style="color:#FF0000";>Red paragraph text</p> */}
        <p>Brasil, Rio de Janeiro</p>
      </div>
      <div className="footer-contact">
        <h3>Contate-me</h3>
        <p>Vamos trabalhar juntos</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Copywrite</div>
        <div className="sns-links">
          {/* aqui yo agregue varias de mis redes sociales ques mas utilizo actualmente */}
          <a
            href="https://www.youtube.com/channel/UCjNl094I23YZFvisRHfS5ww"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-youtube youtube"></i>
          </a>
          <a
            href="https://twitter.com/caiodaltonico"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/caiodaltonico/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram instagram"></i>
          </a>
          <a
            href="https://github.com/caiodaltonico"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github snapchat"></i>
          </a>
          <a
            href="https://t.me/angelrafael420_2"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
