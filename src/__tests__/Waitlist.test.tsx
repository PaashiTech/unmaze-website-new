import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

describe("Waitlist", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Both waitlist components are present", () => {
    mockAllIsIntersecting(false);
    const waitlist = screen.getAllByTestId("waitlist");
    expect(waitlist.length).toBe(2);
  });

  test("Sticky waitlist to be visible when neither waitlist is intersecting", () => {
    mockAllIsIntersecting(false);
    const waitlistSticky = screen.getByTestId("waitlist-sticky");
    expect(waitlistSticky).toBeVisible();
  });

  test("Sticky waitlist to NOT be present when either wailitst is intersecting", () => {
    mockAllIsIntersecting(true);
    const waitlistSticky = screen.queryByTestId("waitlist-sticky");
    expect(waitlistSticky).not.toBeInTheDocument();
  });
});
