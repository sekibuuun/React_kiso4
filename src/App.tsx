import React from "react";
import { Skills } from "./components/Skills";
import { Introduction } from "./components/Introduction";
import "./styles/App.scss"; 

const App: React.FC = () => {
  return (
    <div className="main">
      <Introduction />
      <Skills />
    </div>
  );
};

export {App};
