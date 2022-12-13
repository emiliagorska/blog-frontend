import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

it("test", () => {
  expect(2 + 2).toEqual(4);
});
// describe("renders basic content", () => {
//   it("should have an image", async () => {
//     //USE OF AWAIT
//     // await waitFor(() => {
//     //   render(<App />);
//     // });
//     render(<App />);
//     const image = screen.getByAltText("Sommerville clubhouse");
//     expect(image).toHaveAttribute("src", "www.google.com");
//   });
// });

// it("takes you to a new page when a post image or post title is clicked", async () => {
//   await waitFor(() => {
//     render(<App />);
//   });
//   let somervilleImage = screen.findByAltText("Somerville clubhouse");
//   fireEvent.click(somervilleImage);
//   expect(
//     "This is a single post page for post with id 63174a230b2c949b81ad2982"
//   ).toBeInTheDocument();
// });
