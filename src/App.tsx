import React from "react";
import { Skills } from "./components/Skills";
import { Introduction } from "./components/Introduction";

const App: React.FC = () => {
  return (
    <div className="main">
      <Introduction />
      <Skills />
    </div>
  );
};

export {App};
