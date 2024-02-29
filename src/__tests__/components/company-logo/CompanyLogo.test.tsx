import { render, screen } from "@testing-library/react";
import CompanyLogo from "../../../components/company-logo/CompanyLogo";
import { MemoryRouter } from "react-router-dom";

describe("CompanyLogo component", () => {
  const company = {
    id: 2013,
    name: "thomson",
    alt: "Thomson",
  };

  test("should render a link", () => {
    render(
      <MemoryRouter>
        <CompanyLogo company={company} />
      </MemoryRouter>
    );
    const linkElement = screen.getByTestId("company-logo-2013");
    expect(linkElement).toBeInTheDocument();
  });

  test("should render img", () => {
    render(
      <MemoryRouter>
        <CompanyLogo company={company} />
      </MemoryRouter>
    );
    const imgElement = screen.getByAltText("Thomson") as HTMLImageElement;
    expect(imgElement.src).toContain("thomson");
  });

  test("should render a 'show more' link", () => {
    render(
      <MemoryRouter>
        <CompanyLogo company={company} />
      </MemoryRouter>
    );
    const seeMoreElement = screen.getByText("Ver más");
    expect(seeMoreElement).toBeInTheDocument();
  });
});
