import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">My Dictionary App</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>Coded by Julie May</small>
        </footer>
      </div>
    </div>
  );
}
