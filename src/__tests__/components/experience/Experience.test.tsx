import { render, screen } from "@testing-library/react";
import Experienece from "../../../components/experience/Experience";
import { MemoryRouter } from "react-router-dom";

describe("Experience component", () => {
  test("should render work experience title", () => {
    render(
      <MemoryRouter>
        <Experienece />
      </MemoryRouter>
    );
    const experienceTxt = screen.getByText("Experiencia laboral");
    expect(experienceTxt).toBeInTheDocument();
  });

  test("should render companies logos", () => {
    render(
      <MemoryRouter>
        <Experienece />
      </MemoryRouter>
    );
    const thomsonElement = screen.getByTestId("company-logo-2013");
    const softtekElement = screen.getByTestId("company-logo-2016");
    const globantElement = screen.getByTestId("company-logo-2018");
    const baufestElement = screen.getByTestId("company-logo-2019");
    expect(thomsonElement).toBeInTheDocument();
    expect(softtekElement).toBeInTheDocument();
    expect(globantElement).toBeInTheDocument();
    expect(baufestElement).toBeInTheDocument();
  });
});
