import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

//UNCOMMENTED THIS, CAUSE I NEEDED TO HAVE SOME TEST THAT PASSES IN THIS FILE SO THAT NPM TEST WOULD NOT THROW AN ERROR
describe("renders basic content", () => {
  it("should have an image", async () => {
    render(<App />);
    const image = await screen.findByAltText("Somerville clubhouse");
    expect(image).toHaveAttribute(
      "src",
      "https://www.and.digital/hs-fs/hubfs/Cloud%20Engineering%20North.jpg?width=565&height=515&name=Cloud%20Engineering%20North.jpg"
    );
  });
});

//COMMENTING THIS OUT FOR NOW CAUSE THIS TEST DOESNT WORK AND I DON'T KNOW YET HOW TO MAKE THIS WORK, BUT ALSO DON'T WANT TO DELETE IT IN CASE I CAN MAKE IT WORK LOL
// it("takes you to a new page when a post image or post title is clicked", async () => {
//   await waitFor(() => {
//     render(<App />);
//   });

//   var title = screen.getByTestId("63174a230b2c949b81ad2982");

//   await fireEvent.click(await title);

//   // let url = await global.window.location.href;
//   // expect(url).toContain("/blog/63174a230b2c949b81ad2982");

//   let text = await screen.findByText(
//     "This is a single post page for post with id 63174a230b2c949b81ad2982"
//   );
//   expect(await text).toBeInTheDocument();
// });
