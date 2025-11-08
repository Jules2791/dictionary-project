import React from "react";

export default function Synonyms({ synonyms }) {
  if (!synonyms || synonyms.length === 0) return null;

  return (
    <p className="Synonyms">
      <strong>Synonyms:</strong> {synonyms.join(", ")}
    </p>
  );
}
