import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/NavBar";

test("renders the navbar with correct information", () => {
  render(<Navbar />);
  expect(screen.getByText(/React Games Webpage/i)).toBeInTheDocument();
  expect(screen.getByText(/Created by/i)).toBeInTheDocument();
});
