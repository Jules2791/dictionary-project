import React from "react";
import "./Phonetics.css";

export default function Phonetics({ phonetic }) {
  if (!phonetic) return null;

  // If phonetic is a string, just show it (no audio)
  if (typeof phonetic === "string") {
    return (
      <div className="Phonetic">
        <span className="text">{phonetic}</span>
      </div>
    );
  }

  return (
    <div className="Phonetic">
      {phonetic.audio && (
        <a href={phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      )}

      {phonetic.text && <span className="text">{phonetic.text}</span>}
    </div>
  );
}
