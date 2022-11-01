import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaFacebook, FaDiscord } from "react-icons/fa";
import "./styles.css";
import Img from "../../../assets/back.gif";

const Home = () => {
  return (
    <div className="home">
      <img src={Img} alt="backgraud" />
      <div className="info">
        <h1>Ola,Eu sou</h1>
        <h2>Emanuel Adrian de Almeida Frazão da Fonseca</h2>
        <p>Front-end developer | Javascript | Reactjs</p>
        <div className="icons">
          <a
            href="https://github.com/leudrian?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={25} />
          </a>

          <a
            href="https://www.facebook.com/noobds"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={25} />
          </a>
          <a
            href="https://www.instagram.com/emanueladrian36/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={25} />
          </a>
          <a
            href="https://discord.gg/2VdAwKSj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord size={25} />
          </a>
        </div>
      </div>
      <div className="content">
        <h2>Seja bem vindo ao meu portfólio</h2>

        <p>
          Meu Nome é Emanuel A. de A. F. da Fonseca no 6º semestre de SI CPAN -
          UFMS .Programador Web, python e Unity.
        </p>
        <button>
          <Link to="/about">Saiba mais</Link>
        </button>
      </div>
    </div>
  );
};
export default Home;
