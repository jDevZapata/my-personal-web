import "./imageViewer.css";
import close from "../../../assets/icons/close.png";
import { useImageViewerContext } from "../../../context/ImageViewerContext";

const ImageViewer = () => {
  const { showImageViewer, setShowImageViewer, title, imgUrl } =
    useImageViewerContext();

  return (
    <>
      {showImageViewer && (
        <div
          className="backdrop centered-flex"
          onClick={() => setShowImageViewer(false)}
        ></div>
      )}
      <div className={`image-popup ${showImageViewer ? "toUp" : "toDown"}`}>
        <span className="title">
          <h4>{title}</h4>
          <img
            src={close}
            alt="close"
            className="close_btn clickable"
            onClick={() => setShowImageViewer(false)}
          />
        </span>
        <div className="image centered-flex">
          <img src={imgUrl} alt="img" />
        </div>
      </div>
    </>
  );
};

export default ImageViewer;
