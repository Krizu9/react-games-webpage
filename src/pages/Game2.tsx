import React from "react";
import { useNavigate } from "react-router";

const Game2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Welcome to Game 2</h1>
      <p>This is where the content for Game 2 will be displayed.</p>
      <button style={buttonStyle} onClick={() => navigate("/")}>
        Go Back to Home
      </button>
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  margin: "10px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Game2;
