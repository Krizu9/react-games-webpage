import React from "react";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Welcome to the Game Library</h1>
      <p>Select a game to play:</p>
      <button style={buttonStyle} onClick={() => navigate("/game1")}>
        Play Game 1
      </button>
      <button style={buttonStyle} onClick={() => navigate("/game2")}>
        Play Game 2
      </button>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  margin: "10px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Home;
