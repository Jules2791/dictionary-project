import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResults] = useState(null);
  let [loading, setLoading] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
    setLoading(false);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    if (!keyword) return;
    setLoading(true);

    //Api Documentation https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "ba5f0o41c7ff3cc032eee04b3d66at0a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    //Api Image Documentation https://www.shecodes.io/learn/apis/images
    let shecodesApiKey = "ba5f0o41c7ff3cc032eee04b3d66at0a";
    let shecodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${shecodesApiKey}`;
    axios.get(shecodesApiUrl).then(handleImageResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
