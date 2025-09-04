import React, { useState } from "react";
import logo from "./logo.jpg";
import "./App.css";
import { Getquote } from "./components/GetQuote.js";
import { Bio } from "./components/Bio.js";
import ReactGA from 'react-ga';
import packageJson from '../package.json';

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
  ReactGA.initialize('G-SV60D026YR');
  ReactGA.pageview(window.location.pathname + window.location.search);
  const [currentPage, setCurrentPage] = useState("home");
  const CurrentComponent = pages[currentPage].component;

  return (
    <React.Fragment>
       <div className="app">
        <nav className="navbar navbar-expand-lg navbar-light">
          {Object.entries(pages).map(([pageKey, pageData]) => (
            <div
              key={pageKey}
              onClick={() => setCurrentPage(pageKey)}
              className="nav-link table-hover "
            >
              {pageData.name}
            </div>
          ))}
        </nav>
        <img src={logo} className="App-logo mt-1 mb-1" alt="logo" />
        <div className="app-content">
          <CurrentComponent name={pages[currentPage].name} />
        </div>
        <footer style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: '1rem' }}>
          React version: {packageJson.dependencies.react}
        </footer>
      </div>
    </React.Fragment>
  );
}
export default App;
