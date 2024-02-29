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

  test("should render company logo link", () => {
    render(
      <MemoryRouter>
        <Experienece />
      </MemoryRouter>
    );
    const companyLogoElement = screen.getByTestId("company-logo-2013");
    expect(companyLogoElement).toBeInTheDocument();
  });
});
