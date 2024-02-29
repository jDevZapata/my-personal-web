import { act, render } from "@testing-library/react";
import {
  ImageViewerProvider,
  useImageViewerContext,
} from "../../context/ImageViewerContext";

describe("ImageViewerProvider", () => {
  test("should provide default values", () => {
    let contextValues: any = null;
    const ConsumerComponent = () => {
      contextValues = useImageViewerContext();
      return null;
    };

    render(
      <ImageViewerProvider>
        <ConsumerComponent />
      </ImageViewerProvider>
    );

    expect(contextValues).toEqual({
      showImageViewer: false,
      setShowImageViewer: expect.any(Function),
      title: "",
      setTitle: expect.any(Function),
      imgUrl: "",
      setImgUrl: expect.any(Function),
    });
  });
  
  test("should allow modify values", () => {
    let contextValues: any = null;
    const ConsumerComponent = () => {
      contextValues = useImageViewerContext();
      return null;
    };

    render(
      <ImageViewerProvider>
        <ConsumerComponent />
      </ImageViewerProvider>
    );
    
    act(() => {
      contextValues.setShowImageViewer(true);
      contextValues.setTitle("New Title");
      contextValues.setImgUrl("new-img-url.png");
    });

    expect(contextValues.showImageViewer).toBe(true);
    expect(contextValues.title).toBe('New Title');
    expect(contextValues.imgUrl).toBe('new-img-url.png');
  });
});
