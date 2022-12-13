import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("renders basic content", () => {
  it("should have an image", async () => {
    //USE OF AWAIT
    // await waitFor(() => {
    //   render(<App />);
    // });
    render(<App />);
    const image = screen.getByAltText("Sommerville clubhouse");
    expect(image).toHaveAttribute("src", "www.google.com");
  });
});
