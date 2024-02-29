import { fireEvent, render, screen } from "@testing-library/react";
import Education from "../../../components/education/Education";
import {
  ImageViewerProvider,
  useImageViewerContext,
} from "../../../context/ImageViewerContext";

describe("Education Component", () => {
  test("should render studies and certifications sections", () => {
    const ConsumerComponent = () => {
      return <Education />;
    };
    render(
      <ImageViewerProvider>
        <ConsumerComponent />
      </ImageViewerProvider>
    );
    const studiesSection = screen.getByText("Estudios Universitarios");
    const certificationsSection = screen.getByText("Certificaciones");
    expect(studiesSection).toBeInTheDocument();
    expect(certificationsSection).toBeInTheDocument();
  });

  test("should change showImageViewer when showDiploma button is clicked", () => {
    let contextValues: any = null;
    const ConsumerComponent = () => {
      contextValues = useImageViewerContext();
      return <Education />;
    };
    render(
      <ImageViewerProvider>
        <ConsumerComponent />
      </ImageViewerProvider>
    );
    const showDiplomaLink = screen.getByAltText("diploma");
    fireEvent.click(showDiplomaLink);
    expect(contextValues.showImageViewer).toBe(true);
  });
});
