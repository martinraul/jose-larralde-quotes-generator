import React, { useState, useEffect } from "react";
import quotes from "./data/quotes.json";

export function Getquote() {
  const [quote, saveQuote] = useState([]);
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  useEffect(() => {
    saveQuote();
  }, []);

  return (
    <React.Fragment>

      <div className="card mb-3">
        <h5  className="card-title p-3">"{randomQuote.quote}"</h5>
        <h6 id="subtitle" className="card-subtitle mb-2 text-muted">
          Song:"{randomQuote.cancion}"
        </h6>
      </div>
      <button
        id="button"
        className="btn  btn-danger"
        onClick={() => {
          saveQuote(randomQuote);
        }}
      >
        GET QUOTE
      </button>
      </React.Fragment>

  );
}
