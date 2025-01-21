import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game1" element={<Game1 />} />
          <Route path="/game2" element={<Game2 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
