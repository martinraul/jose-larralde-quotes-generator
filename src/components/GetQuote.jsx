import React, { useState, useEffect } from "react";
import quotes from "./data/quotes.json";

export function Getquote() {
  const [quote, setQuote] = useState(null);

  const getNewQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <React.Fragment>
      <div className="card mb-3">
        {quote && (
          <React.Fragment>
            <h5 className="card-title p-3">"{quote.quote}"</h5>
            <h6 id="subtitle" className="card-subtitle mb-2 text-muted">
              Song:"{quote.cancion}"
            </h6>
          </React.Fragment>
        )}
      </div>
      <button
        id="button"
        className="btn  btn-danger"
        onClick={getNewQuote}
      >
        GET QUOTE
      </button>
    </React.Fragment>
  );
}
