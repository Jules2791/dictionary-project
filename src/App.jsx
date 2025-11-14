import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">🔍 Dictionary App</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>
            Built by Julie May, open-sourced on GitHub and hosted on Netlify.
          </small>
        </footer>
      </div>
    </div>
  );
}
