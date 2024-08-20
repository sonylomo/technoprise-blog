import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { BlogData } from "../data/blogData";
import Home from "./page";

const POSTS_PER_PAGE = 6;

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(() => ({
    replace: vi.fn(),
  })),
  usePathname: vi.fn(() => "/"),
}));

describe("Home Component", () => {
  it("renders the home page with paginated blog posts", async () => {
    render(<Home searchParams={{}} />);

    expect(screen.getByText("The Accessibility Blog")).toBeInTheDocument();

    // Check if the correct number of blog cards are rendered
    const blogCards = await screen.findAllByTestId("blog-card");
    expect(blogCards.length).toBeLessThanOrEqual(POSTS_PER_PAGE);
  });

  it("filters blog posts based on search query", () => {
    render(<Home searchParams={{ query: "future" }} />);

    // Check if the search results are displayed correctly
    render(<Home searchParams={{ query: "accessibility", page: "1" }} />);

    // Check if the result text is present
    const resultTextElement = screen.getByText(/Showing 0 Results of/i);
    const strongElement = screen.getByText(/"accessibility"/i);

    expect(resultTextElement).toBeInTheDocument();
    expect(strongElement).toBeInTheDocument();

    // Check if the filtered blog posts contain the query in their title
    const filteredPosts = BlogData.filter((post) =>
      post.title.toLowerCase().includes("future")
    );
    expect(filteredPosts.length).toBeGreaterThan(0);
    filteredPosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });
  });

  //   it("navigates to the next page of posts", () => {
  //     render(<Home searchParams={{ page: "1" }} />);

  //     // Click the next page button
  //     const nextPageButton = screen.getByRole("button", {
  //       name: "Next page", // Ensure this matches your aria-label
  //     });
  //     fireEvent.click(nextPageButton);

  //     // Check if the current page number increases
  //     expect(screen.getByText(/Page 2 of/i)).toBeInTheDocument();
  //   });

  it("navigates to the previous page of posts", () => {
    render(<Home searchParams={{ page: "2" }} />);

    const prevPageButton = screen.getByRole("button", {
      name: "Previous page",
    });

    fireEvent.click(prevPageButton);

    // Check if the current page number decreases
    expect(screen.getByText(/Page 1 of/i)).toBeInTheDocument();
  });

  it("displays 'Back to blog posts' link when search query is present", () => {
    render(<Home searchParams={{ query: "accessibility" }} />);

    // Check if the "Back to blog posts" link is rendered
    expect(
      screen.getByText("Back to blog posts", { exact: false })
    ).toBeInTheDocument();
  });
});
