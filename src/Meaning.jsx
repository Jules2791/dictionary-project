import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      <p>{props.meaning.definition}</p>
      <em>{props.meaning.example}</em>
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
