import { render, screen } from "@testing-library/react";
import Layout from "../../layout/Layout";
import { MemoryRouter } from "react-router";

describe("Layout Component", () => {
  test("renders header, footer and image-viewer Elements", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    const headerElement = screen.getByTestId("header");
    const footerElement = screen.getByTestId("footer");
    const imageViewerElement = screen.getByTestId("image-viewer");
    expect(headerElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
    expect(imageViewerElement).toBeInTheDocument();
  });

  test('renders home component for "/" route', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Layout />
      </MemoryRouter>
    );
    const homeElement = screen.getByTestId("home");
    expect(homeElement).toBeInTheDocument();
  });

  test('renders work experience component for existing company "/company/:id" route', () => {
    render(
      <MemoryRouter initialEntries={["/company/2013"]}>
        <Layout />
      </MemoryRouter>
    );
    const workExperienceElement = screen.getByTestId("work-experience");
    expect(workExperienceElement).toBeInTheDocument();
  });

  test('renders not found component for not existing company "/company/:unexistingId" route', () => {
    render(
      <MemoryRouter initialEntries={["/company/unexistingId"]}>
        <Layout />
      </MemoryRouter>
    );
    const notFoundElement = screen.getByTestId("not-found");
    expect(notFoundElement).toBeInTheDocument();
  });
});
