import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResults] = useState(null);
  let [loading, setLoading] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
    setLoading(false);
  }

  function search() {
    if (!keyword) return;
    setLoading(true);

    //Api Documentation https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "ba5f0o41c7ff3cc032eee04b3d66at0a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <input
            id="word"
            type="search"
            className="search-input"
            placeholder="Search for a word"
            onChange={handleKeywordChange}
          />
        </form>

        {loading && <p className="loading">Searching…</p>}
      </section>
      <Results results={result} />
    </div>
  );
}
