import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

describe("Header Component", () => {
  test("renders the title and subtitle", () => {
    render(<Header title="Dashboard" subtitle="Welcome back!" />);

    // check if the title is rendered correctly 
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Welcome back!")).toBeInTheDocument();
  });

  test("renders with correct styles", () => {
    render(<Header title="Test Title" subtitle="Test Subtitle" />);

    const titleElement = screen.getByText("Test Title");
    const subtitleElement = screen.getByText("Test Subtitle");

    expect(titleElement).toHaveStyle("font-weight: 700");
    // ensure the rendering of subtitle 
    expect(subtitleElement).toBeInTheDocument();
  });
});
