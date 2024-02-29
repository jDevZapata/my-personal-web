import { render, screen } from "@testing-library/react";
import GoBackButton from "../../../components/go-back-button/GoBackButton";
import { MemoryRouter } from "react-router-dom";

describe("GoBackButton component", () => {
  test("should render a link", () => {
    render(
      <MemoryRouter>
        <GoBackButton />
      </MemoryRouter>
    );
    const linkElement = screen.getByTestId("go-back-btn");
    expect(linkElement).toBeInTheDocument();
  });

  test("should render a left icon", () => {
    render(
      <MemoryRouter>
        <GoBackButton />
      </MemoryRouter>
    );
    const imgElement = screen.getByAltText("left") as HTMLImageElement;
    expect(imgElement.src).toContain("left.png");
  });

  test("should show a go back text", () => {
    render(
      <MemoryRouter>
        <GoBackButton />
      </MemoryRouter>
    );
    const goBackText = screen.getByText("Volver");
    expect(goBackText).toBeInTheDocument();
  });
});
