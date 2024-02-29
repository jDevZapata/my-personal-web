import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../../../components/header/Header";

describe("GoBackButton component", () => {
  test("should render the owners name", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const ownersName = screen.getByText("Jesús Müller");
    expect(ownersName).toBeInTheDocument();
  });
});
