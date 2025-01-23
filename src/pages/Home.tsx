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
          <h3>Some game</h3>
          <p>This will have description</p>
          <img className="gameImage" src="https://placehold.jp/150x150.png" alt="Memory Game" />
          <button onClick={() => navigate("/game2")}>Play</button>
        </div>
        
        
        
      </div>
    </div>
  );
}

export default Home;
