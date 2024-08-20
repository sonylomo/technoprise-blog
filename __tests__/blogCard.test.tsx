import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { formatDate } from "../lib/formatDate";
import BlogCard from "../components/blogCard";

describe("BlogCard Component", () => {
  const mockProps = {
    id: 1,
    title: "The Future of AI in Everyday Life",
    publicationDate: "2024-08-01",
    excerpt:
      "Artificial Intelligence is no longer just a buzzword. From smart home devices to personalized healthcare, AI is seamlessly integrating into our daily routines. But what does the future hold? In this post, we explore the next wave of AI advancements and how they will impact everything from education to entertainment.",
  };

  it("renders correctly with provided props", () => {
    render(<BlogCard {...mockProps} />);

    // Check if the blog card is in the document
    const blogCard = screen.getByTestId("blog-card");
    expect(blogCard).toBeInTheDocument();

    // Check if the formatted date is displayed
    const formattedDate = formatDate(mockProps.publicationDate);
    expect(
      screen.getByText(`${formattedDate} · 3 min read`)
    ).toBeInTheDocument();

    // Check if the title and excerpt are rendered correctly
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.excerpt)).toBeInTheDocument();
  });

  it("renders the image with correct alt text", () => {
    render(<BlogCard {...mockProps} />);

    // Check if the image has the correct alt text
    const image = screen.getByAltText(mockProps.title);
    expect(image).toBeInTheDocument();
  });

  it("renders the link with the correct href", () => {
    render(<BlogCard {...mockProps} />);

    // Check if the link has the correct href
    const link = screen.getByTestId("blog-card");
    expect(link).toHaveAttribute("href", `/posts/${mockProps.id}`);
  });

  it("displays the correct text styles", () => {
    render(<BlogCard {...mockProps} />);

    // Check text styles
    const dateText = screen.getByText(/· 3 min read/i);
    expect(dateText).toHaveStyle({ fontWeight: "600", fontSize: "xs" });

    const titleText = screen.getByText(mockProps.title);
    expect(titleText).toHaveStyle({ fontWeight: "700", fontSize: "medium" });
  });

  it("has correct hover styles", () => {
    render(<BlogCard {...mockProps} />);

    // Check hover styles
    const link = screen.getByTestId("blog-card");
    expect(link).toHaveStyle({
      textDecoration: "none",
      border: "1px",
      borderColor: "black",
    });
  });
});
