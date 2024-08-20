import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import NavBar from "../components/navbar";

// Mock implementations
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    replace: vi.fn(),
    push: vi.fn(),
  }),
  useSearchParams: () => ({
    get: (key: string) => (key === "query" ? "accessibility" : null),
  }),
  usePathname: () => "/",
}));

vi.mock("@chakra-ui/react", () => {
  return {
    useDisclosure: () => ({
      isOpen: false,
      onOpen: vi.fn(),
      onClose: vi.fn(),
    }),
    Box: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    Flex: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    HStack: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    IconButton: ({ children }: { children: React.ReactNode }) => (
      <button>{children}</button>
    ),
    InputGroup: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    Input: (props: any) => <input {...props} />,
    InputRightElement: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    Button: ({ children }: { children: React.ReactNode }) => (
      <button>{children}</button>
    ),
  };
});

describe("NavBar Component", () => {
  it("renders the NavBar with logo, navigation links, and search input", () => {
    render(<NavBar />);

    // Check if the logo is in the document
    expect(screen.getByAltText("Blog Posts Logo")).toBeInTheDocument();

    // Check if navigation link is present
    expect(screen.getByText("Blogs")).toBeInTheDocument();

    // Check if the search input is present
    expect(screen.getByPlaceholderText("Search Blog")).toBeInTheDocument();

    // Check if the 'Create Blog Post' button is present
    expect(screen.getByText("Create Blog Post")).toBeInTheDocument();
  });
});
