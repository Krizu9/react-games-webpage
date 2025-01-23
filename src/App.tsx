import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Game1 from "./pages/Game1/Game1";
import Game2 from "./pages/Game2/Game2";

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game1" element={<Game1 />} />
          <Route path="/game2" element={<Game2 />} />
        </Routes>
    </Router>
  );
};

export default App;
