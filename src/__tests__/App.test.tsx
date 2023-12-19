import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

describe("App", () => {
  it("App to be in document", () => {
    render(<App />);
    mockAllIsIntersecting(false);
    expect(screen.getByText("Investment Journeys")).toBeInTheDocument();
  });
});
