import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("renders the navbar and routes correctly", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/React Games Webpage/i)).toBeInTheDocument();

  expect(screen.getByText(/Welcome to the Game Library/i)).toBeInTheDocument();

});
