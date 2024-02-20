import { createContext, useContext, useState } from "react";

const ImageViewerContext = createContext<any>(null);

export const useImageViewerContext = () => useContext(ImageViewerContext);

export const ImageViewerProvider = ({ children }: any) => {
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  return (
    <ImageViewerContext.Provider
      value={{
        showImageViewer,
        setShowImageViewer,
        title,
        setTitle,
        imgUrl,
        setImgUrl,
      }}
    >
      {children}
    </ImageViewerContext.Provider>
  );
};
