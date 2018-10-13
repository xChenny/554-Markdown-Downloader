import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.scss";

const Homepage = () => {
  return (
    <div className="home">
      <div className="white">
        <h1 id="marque-header">Marque</h1>
        <div className="centered">
          <Link to="/editor">
            <button>Start</button>
          </Link>
        </div>
      </div>
      <div className="blue">
        <h1 id="down-header">Down</h1>
        <h3>
          MarqueDown is THE tool to use for editing markdown files. Try it out
          and be amazed.
        </h3>
      </div>
    </div>
  );
};

export default Homepage;
