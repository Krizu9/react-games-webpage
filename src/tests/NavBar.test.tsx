import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/NavBar";

describe("NavBar Component", () => {
  test("renders the heading and description", () => {
    render(<Navbar />);

    // Check if the heading is rendered
    expect(screen.getByText("React Games Webpage")).toBeInTheDocument();

    // Check if the description is rendered
    expect(screen.getByText("Created by Kristian Pekkanen")).toBeInTheDocument();
  });
});
