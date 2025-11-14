import React from "react";

export default function Phonetics({ phonetic }) {
  if (!phonetic) return null;

  return <p className="text-muted fst-italic mb-4">[{phonetic}]</p>;
}
