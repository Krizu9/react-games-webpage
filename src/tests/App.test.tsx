import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the navbar and routes correctly", () => {
  render(
      <App />
  );

  // check if the navbar text is rendered
  expect(screen.getByText(/React Games Webpage/i)).toBeInTheDocument();

  // check if the home page content is rendered
  expect(screen.getByText(/Welcome to the Game Library/i)).toBeInTheDocument();
  expect(screen.getByText(/Select a game to play:/i)).toBeInTheDocument();

  // check if the navigation buttons are rendered
  expect(screen.getByText(/Play Memory Game/i)).toBeInTheDocument();
  expect(screen.getByText(/Play Game 2/i)).toBeInTheDocument();
});
