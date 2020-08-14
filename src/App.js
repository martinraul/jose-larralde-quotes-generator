import React, { useState } from "react";
import logo from "./logo.jpg";
import "./App.css";
import { Getquote } from "./components/GetQuote.js";
import { Bio } from "./components/Bio.js";

const pages = {
  home: {
    name: "Home",
    component: Getquote,
  },
  bio: {
    name: "Bio",
    component: Bio,
  },
};

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const CurrentComponent = pages[currentPage].component;

  return (
    <React.Fragment>
      <div className="app">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          {Object.entries(pages).map(([pageKey, pageData]) => (
            <div
              active={pageKey === currentPage}
              key={pageKey}
              navigation
              onClick={() => setCurrentPage(pageKey)}
              className="nav-link table-hover "
            >
              {pageData.name}
            </div>
          ))}
        </nav>
        <img src={logo} className="App-logo mt-1" alt="logo" />
        <div className="app-content">
          <CurrentComponent name={pages[currentPage].name} />
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;
