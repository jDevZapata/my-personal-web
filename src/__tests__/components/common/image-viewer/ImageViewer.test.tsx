import { act, fireEvent, render, screen } from "@testing-library/react";
import ImageViewer from "../../../../components/common/image-viewer/ImageViewer";
import {
  ImageViewerProvider,
  useImageViewerContext,
} from "../../../../context/ImageViewerContext";

describe("ImageViewer component", () => {
  const TEST_TITLE = "Test Title";
  const TEST_IMG_URL = "test-img-url.png";

  test("should render ImageViewer with Title and img", () => {
    let contextValues: any = null;
    const ConsumerComponent = () => {
      contextValues = useImageViewerContext();
      return <ImageViewer />;
    };
    render(
      <ImageViewerProvider>
        <ConsumerComponent />
      </ImageViewerProvider>
    );
    act(() => {
      contextValues.setShowImageViewer(true);
      contextValues.setTitle(TEST_TITLE);
      contextValues.setImgUrl(TEST_IMG_URL);
    });
    const imageViewerElement = screen.getByTestId("image-viewer");
    expect(imageViewerElement).toBeInTheDocument();
    const titleElement = screen.getByText(TEST_TITLE);
    expect(titleElement).toBeInTheDocument();
    const imgElement = screen.getByAltText("img") as HTMLImageElement;
    expect(imgElement.src).toContain(TEST_IMG_URL);
  });

  test("should close ImageViewer when close button is clicked", () => {
    let contextValues: any = null;
    const ConsumerComponent = () => {
      contextValues = useImageViewerContext();
      return <ImageViewer />;
    };
    render(
      <ImageViewerProvider>
        <ConsumerComponent />
      </ImageViewerProvider>
    );
    act(() => {
      contextValues.setShowImageViewer(true);
      contextValues.setTitle(TEST_TITLE);
      contextValues.setImgUrl(TEST_IMG_URL);
    });
    const closeButton = screen.getByAltText("close");
    fireEvent.click(closeButton);
    expect(contextValues.showImageViewer).toBe(false);
  });

  test("should close ImageViewer when backdrop is clicked", () => {
    let contextValues: any = null;
    const ConsumerComponent = () => {
      contextValues = useImageViewerContext();
      return <ImageViewer />;
    };
    render(
      <ImageViewerProvider>
        <ConsumerComponent />
      </ImageViewerProvider>
    );
    act(() => {
      contextValues.setShowImageViewer(true);
      contextValues.setTitle(TEST_TITLE);
      contextValues.setImgUrl(TEST_IMG_URL);
    });
    const backdrop = screen.getByTestId("backdrop");
    fireEvent.click(backdrop);
    expect(contextValues.showImageViewer).toBe(false);
  });
});
