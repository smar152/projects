import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1> My Projects</h1>
      <ul>
        <li>
          <Link to="/project1">Εδω το καλο προτζεκτ</Link>
        </li>
        <li>
          <Link to="/brackets">Εδω το καλο κομπάηλερ</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
