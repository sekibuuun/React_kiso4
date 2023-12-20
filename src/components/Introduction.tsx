import React from "react";
import "../styles/introduction.scss";
import Integral from "../assets/integral.png";

const Introduction: React.FC = () => {

  return (
    <div className="introduction">
      <h1 className="title">Introduction</h1>
      <div className="content">
        <img src={Integral} alt="integral" />
        <div className="text">
          <p>Hi, I'm Sekibuuun.</p>
          <p>
            I'm a student. I would like to be a web developer in the future.
          </p>
          <div className="links">
              <div className="link">
                <h2>X</h2>
                <a href="https://twitter.com/Sekibuuun7466" target="_blank" rel="noreferrer">
                  https://twitter.com/Sekibuuun7466
                </a>
              </div>
              <div className="link">
                <h2>GitHub</h2>
                <a href="https://github.com/sekibuuun" target="_blank" rel="noreferrer">
                https://github.com/sekibuuun
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Introduction };
