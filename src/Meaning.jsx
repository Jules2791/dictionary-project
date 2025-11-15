import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning({ meaning }) {
  if (!meaning) return null;

  return (
    <div className="Meaning">
      <h5>{meaning.partOfSpeech}</h5>
      <div>
        <p>
          <strong>Definition:</strong> {meaning.definition}
        </p>
        {meaning.example && (
          <em>
            <strong> Example:</strong> {meaning.example}
          </em>
        )}
      </div>

      <Synonyms synonyms={meaning.synonyms} />
    </div>
  );
}
