import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="homecontainer">
      <h1>Welcome to the Game Library <br /> created by Kristian Pekkanen</h1>
      <p>Select a game to play:</p>
      <div className="cardcontainer">
        <div className="cardforgame">
          <h3>Memory game</h3>
          <p>Try to find all the matching pairs</p>
          <img className="gameImage" src={require("../images/memorygame.jpg")} alt="Memory Game" />
          <button onClick={() => navigate("/game1")}>Play</button>
        </div>

        <div className="cardforgame">
          <h3>Snake game</h3>
          <p>Eat and grow!</p>
          <img className="gameImage" src={require("../images/snakegame.png")} alt="Memory Game" />
          <button onClick={() => navigate("/game2")}>Play</button>
        </div>
        
        
        
      </div>
    </div>
  );
}

export default Home;
