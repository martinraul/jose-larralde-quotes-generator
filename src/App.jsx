import React, { useState, useEffect, } from "react";
import logo from "./assets/logo.jpg";
import "./App.css";
import { Getquote } from "./components/GetQuote.jsx";
import { Bio } from "./components/Bio.jsx";
import ReactGA from "react-ga4"; // Changed to react-ga4
import packageJson from "../package.json";

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

  // 1. Initialize GA4 once on mount
  useEffect(() => {
    ReactGA.initialize("G-SV60D026YR");
  }, []);

  // 2. Track page view whenever the currentPage changes
  useEffect(() => {
    ReactGA.send({ 
      hitType: "pageview", 
      page: currentPage, 
      title: pages[currentPage].name 
    });
  }, [currentPage]);


  const CurrentComponent = pages[currentPage].component;

  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg navbar-light">
        {Object.entries(pages).map(([pageKey, pageData]) => (
          <div
            key={pageKey}
            onClick={() => setCurrentPage(pageKey)}
            className={`nav-link table-hover ${currentPage === pageKey ? 'active' : ''}`}
            style={{ cursor: 'pointer' }}
          >
            {pageData.name}
          </div>
        ))}
      </nav>

      <img src={logo} className="App-logo mt-1 mb-1" alt="logo" />

      <div className="app-content">
        <CurrentComponent name={pages[currentPage].name} />
      </div>

      <footer style={{ fontSize: "0.8rem", textAlign: "center", marginTop: "1rem" }}>
        React version: {packageJson.dependencies.react}
      </footer>
    </div>
  );
}

export default App;