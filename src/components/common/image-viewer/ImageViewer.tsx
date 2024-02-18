import "./imageViewer.css";
import close from "../../../assets/icons/close.png";
import { ReactNode } from "react";

const ImageViewer = ({
  closeImageViewer,
  title,
  children,
}: ImageViewerType) => {
  return (
    <>
      <div className="backdrop centered-flex" onClick={closeImageViewer}></div>
      <div className="image-popup">
        <span className="title">
          <h4>{title}</h4>
          <img src={close} alt="close" className="close_btn clickable" onClick={closeImageViewer} />
        </span>
        <div className="image centered-flex">{children}</div>
      </div>
    </>
  );
};

type ImageViewerType = {
  closeImageViewer: () => {};
  title: string;
  children: ReactNode;
};

export default ImageViewer;
