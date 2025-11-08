import React from "react";

export default function Phonetics({ phonetic }) {
  if (!phonetic) return null;

  return <p className="Phonetic">[{phonetic}]</p>;
}
