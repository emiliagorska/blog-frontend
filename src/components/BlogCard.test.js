import { render, screen } from "@testing-library/react";
import BlogCard from "./BlogCard.js";

const testPost = {
  id: "asdfgh",
  title: "Somerville clubhouse",
  content: "This is house of AND",
  image: "www.google.com", // this will be a URL
  createdDate: "10.10.2022",
};

describe("renders a blog card", () => {
  it("renders a blog post title", () => {
    render(<BlogCard post={testPost} />);
    const linkElement = screen.getByRole("link", {
      name: "Somerville clubhouse",
    });
    expect(linkElement).toBeInTheDocument();
  });
  it("renders post content", () => {
    render(<BlogCard post={testPost} />);
    const content = screen.getByRole("article");
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent("This is house of AND");
  });
  it("renders an image", () => {
    render(<BlogCard post={testPost} />);
    const image = screen.getByAltText("Somerville clubhouse");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "www.google.com");
  });
  it("renders the date", () => {
    render(<BlogCard post={testPost} />);
    const date = screen.getByText("10.10.2022");
    expect(date).toBeInTheDocument();
  });
});

// test("renders learn react link2", () => {
//   render(<BlogCard post={testPost} />);
//   const linkElement = screen.getByRole("link");
//   expect(linkElement).toEqual(expect.stringContaining("Somerville clubhouse"));
// });

// test("renders learn react link3", () => {
//   render(<BlogCard post={testPost} />);
//   const linkElement = screen.getByRole("link");
//   expect(linkElement).toHaveTextContent("Somerville clubhouse");
// });
