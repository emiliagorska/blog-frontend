import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
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
    const { container } = render(
      <BrowserRouter>
        <BlogCard post={testPost} />
      </BrowserRouter>
    );

    //FOR SOME REASON YOU NEED TO ACCESS ELEMENT RETURNED BY GET ELEMENTS BY CLASSNAME BY INDEX, AS WHAT IS RETURNED IN HTML COLLECTION?
    const title = container.getElementsByClassName("postTitle")[0];
    // //console.log("TITLE:", title[0]);
    // const linkElement = screen.getByRole("link", {
    //   name: "Somerville clubhouse",
    // });
    // console.log("LINK", linkElement);
    expect(title).toBeInTheDocument();
  });
  it("renders post content", () => {
    render(
      <BrowserRouter>
        <BlogCard post={testPost} />
      </BrowserRouter>
    );
    const content = screen.getByRole("article");
    //console.log("ARTICLE", content);
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
  it("renders the date", () => {
    render(
      <BrowserRouter>
        <BlogCard post={testPost} />
      </BrowserRouter>
    );
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
