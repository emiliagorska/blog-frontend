import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("renders basic content", () => {
  it("should have an image", async () => {
    await waitFor(() => {
      render(<App />);
    });
    const image = screen.getByAltText("Sommerville clubhouse");
    expect(image).toHaveAttribute("src", "www.google.com");
  });
});
