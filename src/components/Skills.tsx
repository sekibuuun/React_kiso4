import React from "react";
import "../styles/skills.scss";
import ReactIcon from "../assets/react.svg";
import VueIcon from "../assets/vue.svg";
import JavaScriptIcon from "../assets/javascript.svg";

const Skills = () => {

  return (
    <div className="skills">
      <h1 className="title">My Skills</h1>
      <div className="languages">
          <div className="language">
            <img src={ReactIcon} alt="React" />
            <div className="text">
              <h2>React</h2>
              <p>3 months</p>
            </div>
          </div>
          <div className="language">
            <img src={VueIcon} alt="Vue" />
            <div className="text">
              <h2>Vue</h2>
              <p>6 months</p>
            </div>
          </div>
          <div className="language">
            <img src={JavaScriptIcon} alt="JavaScript" />
            <div className="text">
              <h2>JavaScript</h2>
              <p>6 months</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export { Skills };
