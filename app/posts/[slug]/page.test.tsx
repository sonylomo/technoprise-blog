import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Post from "./page";
import Image from "next/image";

vi.mock("../../data/blogData.ts", () => ({
  BlogData: [
    {
      id: 1,
      title: "The Future of AI in Everyday Life",
      publicationDate: "2024-08-01",
      excerpt:
        "Artificial Intelligence is no longer just a buzzword. From smart home devices to personalized healthcare, AI is seamlessly integrating into our daily routines. But what does the future hold? In this post, we explore the next wave of AI advancements and how they will impact everything from education to entertainment.",
    },
  ],
}));


vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <Image {...props} alt="" />,
}));

vi.mock("../../lib/formatDate", () => ({
  formatDate: vi.fn((date: string) => `Formatted ${date}`),
}));

describe("Post Component", () => {
  it("renders the loading state initially", () => {
    render(<Post params={{ slug: "999" }} />); // Non-existent slug
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders the post content when post is found", () => {
    render(<Post params={{ slug: "1" }} />); // Existing slug

    expect(
      screen.getByText("The Future of AI in Everyday Life")
    ).toBeInTheDocument();
    expect(screen.getByText("Aug 2024 • 3 min Read")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Artificial Intelligence is no longer just a buzzword. From smart home devices to personalized healthcare, AI is seamlessly integrating into our daily routines. But what does the future hold? In this post, we explore the next wave of AI advancements and how they will impact everything from education to entertainment."
      )
    ).toBeInTheDocument();
  });

  it("renders the back link", () => {
    render(<Post params={{ slug: "1" }} />);

    const backLink = screen.getByText("Back to blog posts");
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest("a")).toHaveAttribute("href", "/");
  });

  it("renders the image with correct alt text", () => {
    const image = screen.getByAltText("The Future of AI in Everyday Life") as HTMLImageElement;

    // const image = screen.getByAltText("The Future of AI in Everyday Life");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/dummy.png");
  });
});
