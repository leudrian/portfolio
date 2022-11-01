import React from "react";
import {
  FaUserAlt,
  FaHandshake,
  FaHeart,
  FaTools,
  FaMicrophone,
  FaLightbulb
} from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaGitSquare,
  FaReact,
  FaNode
} from "react-icons/fa";

import "./styles.css";

const Habilidades = () => {
  return (
    <div className="skills">
      <div className="containerSkills">
        <div className="hardSkills">
          <h2>
            <strong>Hard</strong> Skills
          </h2>
          <ul>
            <li>
              <FaHtml5 size={40} className="react-icons" />
              <span>HTML5</span>
            </li>
            <li>
              <FaCss3Alt size={40} className="react-icons" />
              <span>CSS3</span>
            </li>
            <li>
              <FaJsSquare size={40} className="react-icons" />
              <span>JAVASCRIPT</span>
            </li>
            <li>
              <FaBootstrap size={40} className="react-icons" />
              <span>BOOTSTRAP</span>
            </li>
            <li>
              <FaGitSquare size={40} className="react-icons" />
              <span>GIT</span>
            </li>
            <li>
              <FaReact size={40} className="react-icons" />
              <span>REACTJS</span>
            </li>
            <li>
              <FaReact size={40} className="react-icons" />
              <span>REACT NATIVE</span>
            </li>
            <li>
              <FaNode size={40} className="react-icons" />
              <span>NODE</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Habilidades;
