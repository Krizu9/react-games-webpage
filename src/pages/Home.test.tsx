import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

test("renders the home page with game buttons", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(screen.getByText(/Welcome to the Game Library/i)).toBeInTheDocument();
  expect(screen.getByText(/Play Game 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Play Game 2/i)).toBeInTheDocument();
});
