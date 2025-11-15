import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            🔍📚 <strong>Dictionary App</strong>
          </h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Built by{" "}
            <a href="https://github.com/Jules2791" target="_blank">
              Julie May
            </a>
            , open-sourced on{" "}
            <a
              href="https://github.com/Jules2791/dictionary-project"
              target="_blank"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://visionary-griffin-c834ca.netlify.app/"
              target="_blank"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
