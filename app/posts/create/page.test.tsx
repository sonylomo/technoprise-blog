import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CreatePost from "./page";
import "@testing-library/jest-dom";

describe("CreatePost Component", () => {
  it("renders the form correctly", () => {
    render(<CreatePost />);

    // Check if form heading is rendered
    expect(screen.getByText("Create Blog Post")).toBeInTheDocument();

    // Check if the input fields are rendered
    expect(screen.getByPlaceholderText("Harry Potter")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("22-02-1998")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("harry-potter")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Body")).toBeInTheDocument();

    // Check if the "Browse Files" button is rendered
    expect(screen.getByText("Browse Files")).toBeInTheDocument();

    // Check if the "Save Changes" button is rendered
    expect(screen.getByText("Save Changes")).toBeInTheDocument();
  });

  it("allows text input in the fields", () => {
    render(<CreatePost />);

    const titleInput = screen.getByPlaceholderText("Harry Potter");
    const dateInput = screen.getByPlaceholderText("22-02-1998");
    const slugInput = screen.getByPlaceholderText("harry-potter");
    const contentInput = screen.getByPlaceholderText("Body");

    // Simulate user input
    fireEvent.change(titleInput, { target: { value: "My First Blog Post" } });
    fireEvent.change(dateInput, { target: { value: "2024-08-20" } });
    fireEvent.change(slugInput, { target: { value: "my-first-blog-post" } });
    fireEvent.change(contentInput, {
      target: { value: "This is the content of my first blog post." },
    });

    // Check if the input values have changed
    expect(titleInput).toHaveValue("My First Blog Post");
    expect(dateInput).toHaveValue("2024-08-20");
    expect(slugInput).toHaveValue("my-first-blog-post");
    expect(contentInput).toHaveValue(
      "This is the content of my first blog post."
    );
  });

  it("triggers file input when 'Browse Files' button is clicked", () => {
    render(<CreatePost />);

    const browseButton = screen.getByTestId("browse-files-button");
    const fileInput = screen.getByLabelText(/Please upload images/i);

    fireEvent.click(browseButton);

    expect(fileInput).not.toBeVisible(); // File input should be hidden
  });
});
