import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Home from "./Home";

describe("Home Component", () => {
  test("renders the heading and description", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // check if the heading is rendered
    expect(screen.getByText("Welcome to the Game Library")).toBeInTheDocument();

    // check if the description is rendered
    expect(screen.getByText("Select a game to play:")).toBeInTheDocument();

    // check if the buttons are rendered
    expect(screen.getByText("Play Game 1")).toBeInTheDocument();
    expect(screen.getByText("Play Game 2")).toBeInTheDocument();
  });
});
