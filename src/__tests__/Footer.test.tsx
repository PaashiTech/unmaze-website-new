import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer/Footer";
import userEvent from "@testing-library/user-event";

describe("Footer tests", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test("should display all social icons", () => {
    const linkedInIcon = screen.getByAltText("linkedin-icon");
    const instagramIcon = screen.getByAltText("instagram-icon");
    const twitterIcon = screen.getByAltText("twitter-icon");
    const wellfoundIcon = screen.getByAltText("wellfound-icon");

    const socialIcons = [
      linkedInIcon,
      instagramIcon,
      twitterIcon,
      wellfoundIcon,
    ];

    socialIcons.forEach((icon) => {
      expect(icon).toBeInTheDocument();
    });
  });

  test("To display social links with corresponding href", () => {
    const linkHrefs = [
      "https://www.linkedin.com/company/unmaze-app/about/",
      "https://www.linkedin.com/company/unmaze-app/about/",
      "https://twitter.com/UnmazeApp",
      "https://wellfound.com/company/unmaze-app",
    ];

    const links = screen.getAllByTestId("social-link");
    expect(links.length).toBe(4);

    links.forEach((link, i) => {
      expect(link).toHaveAttribute("href", linkHrefs[i]);
      expect(link).toHaveAttribute("target", "_blank");
      userEvent.click(link);
    });
  });
});
