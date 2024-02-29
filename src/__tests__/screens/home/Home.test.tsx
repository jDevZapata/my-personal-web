import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ImageViewerProvider } from "../../../context/ImageViewerContext";
import Home from "../../../screens/home/Home";

describe("Home Component", () => {
  test("should render presentation, experience, education, technologies Elements", () => {
    render(
      <MemoryRouter>
        <ImageViewerProvider>
          <Home />
        </ImageViewerProvider>
      </MemoryRouter>
    );

    const presentationElement = screen.getByTestId("presentation");
    const experienceElement = screen.getByTestId("experience");
    const educationElement = screen.getByTestId("education");
    const technologiesElement = screen.getByTestId("technologies");

    expect(presentationElement).toBeInTheDocument();
    expect(experienceElement).toBeInTheDocument();
    expect(educationElement).toBeInTheDocument();
    expect(technologiesElement).toBeInTheDocument();
  });
});
