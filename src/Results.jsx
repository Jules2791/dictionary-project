import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results({ results }) {
  if (!results) return null;

  return (
    <div className="Results">
      <section>
        <h2>{results.word}</h2>
        <Phonetics phonetic={results.phonetic} />
      </section>

      {results.meanings.map((meaning, index) => (
        <section key={index}>
          <Meaning meaning={meaning} />
        </section>
      ))}
    </div>
  );
}
