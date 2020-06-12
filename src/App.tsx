import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logos} className="App-logo" alt="logo" />
        <p>
          <a
            className="App-link"
            href="https://coletiv.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coletiv
          </a>{" "}
          companion website for the Github Actions example
        </p>
        <a
          className="App-link"
          href="https://github.com/coletiv/react-js-github-actions-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository
        </a>
      </header>
    </div>
  );
};

export default App;
