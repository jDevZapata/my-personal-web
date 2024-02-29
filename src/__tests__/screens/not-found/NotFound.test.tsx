import { render, screen } from "@testing-library/react";
import NotFound from "../../../screens/not-found/NotFound";

describe("Not Found component", () => {
  test("shoud render Not Found", () => {
    render(<NotFound />);
    const notFoundElement = screen.getByTestId("not-found");
    expect(notFoundElement).toBeInTheDocument();
    expect(notFoundElement).toHaveTextContent("Oops! Parece que te perdiste...")
  });
});
