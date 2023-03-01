import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BlogCard from "./BlogCard.js";
import dateChecker from "date-and-time";

const testPost = {
  id: "asdfgh",
  title: "Somerville clubhouse",
  content: "This is house of AND",
  image: "www.google.com", // this will be a URL
  createdDate: "10.10.2022",
};

describe("renders a blog card", () => {
  it("renders a blog post title", () => {
    const { container } = render(
      <BrowserRouter>
        <BlogCard post={testPost} />
      </BrowserRouter>
    );
    const title = container.getElementsByClassName("postTitle")[0];
    expect(title).toBeInTheDocument();
  });
  it("renders post content", () => {
    render(
      <BrowserRouter>
        <BlogCard post={testPost} />
      </BrowserRouter>
    );
    const content = screen.getByRole("article");

    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent("This is house of AND");
  });
  it("renders an image", () => {
    render(
      <BrowserRouter>
        <BlogCard post={testPost} />
      </BrowserRouter>
    );
    const image = screen.getByAltText("Somerville clubhouse");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "www.google.com");
  });
  it("renders the correct date", () => {
    render(
      <BrowserRouter>
        <BlogCard post={testPost} />
      </BrowserRouter>
    );
    const date = screen.getByText("10.10.2022");
    expect(date).toBeInTheDocument();

    let dateFormatStatus = dateChecker.isValid(date.textContent, "DD.MM.YYYY");
    expect(dateFormatStatus).toBe(true);
  });
  it("renders a calendar image next to the date", () => {
    render(
      <BrowserRouter>
        <BlogCard post={testPost} />
      </BrowserRouter>
    );
    const calendarIcon = screen.getByTestId("calendarIcon");
    expect(calendarIcon).toBeInTheDocument();
    //THE FOLLOWING TEST PASSES, BUT I HAVE A FEELING THERE IS SOMETHING WRONG WITH WRITING TESTS LIKE THAT. NOT SURE HOW ELSE TO CHECK WHETHER THE CALENDAR ICON IS DISPLAYED CORRECTLY THOUGH
    expect(calendarIcon).toHaveTextContent("📅");
  });
});
