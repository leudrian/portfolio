import React from "react";
import Img from "../../../assets/icon.jpg";
import Habilidades from "../skills/index";
import "./styles.css";

function Sobre() {
  return (
    <>
      <div className="sobre">
        <img src={Img} alt="perfil" />

        <div className="conteudo">
          <div className="title">
            <strong>Sobre</strong>
            <h2>Mim</h2>
          </div>
          <p>
            Meu nome eh Emanuel A. de A. F. da Fonseca estou no momento no 6º
            periodo do curso de Si CPAN - UFMS.
          </p>
          <p>
            Desenvolvedor HTML, JAVASCRIPT ,CSS, Python e rescentemente REACTJS
          </p>
        </div>
      </div>
      <Habilidades />
    </>
  );
}
export default Sobre;
