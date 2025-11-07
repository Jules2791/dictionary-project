import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    //Api Documentation https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "ba5f0o41c7ff3cc032eee04b3d66at0a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <label htmlFor="word">What word do you want to look up?</label>
          <input
            id="word"
            type="search"
            className="search-input"
            placeholder="Type a word..."
            onChange={handleKeywordChange}
          />
        </form>
        <small className="hint">e.g. sunset, ocean, happy…</small>
      </section>
      <Results results={result} />
    </div>
  );
}
