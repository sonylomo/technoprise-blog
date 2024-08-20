import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "../components/footer";

describe("Footer Component", () => {
  it("renders the footer with the logo and copyright text", () => {
    render(<Footer />);

    // Check if the logo is in the document
    const logo = screen.getByAltText("Blog Posts Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/logo.svg");
    expect(logo).toHaveAttribute("width", "144");
    expect(logo).toHaveAttribute("height", "57");

    // Check if the copyright text is in the document
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(
      `Copyright @${currentYear} . BlogPost`
    );
    expect(copyrightText).toBeInTheDocument();
  });

  it("displays the correct copyright year", () => {
    render(<Footer />);

    // Check if the copyright year is the current year
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(
      `Copyright @${currentYear} . BlogPost`
    );
    expect(copyrightText).toBeInTheDocument();
  });
});
