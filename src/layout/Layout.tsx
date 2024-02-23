import { ImageViewerProvider } from "../context/ImageViewerContext";
import WorkExperience from "../screens/work-experience/WorkExperience";
import ImageViewer from "../components/common/image-viewer/ImageViewer";
import Home from "../screens/home/Home";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../screens/not-found/NotFoundPage";

const Layout = () => {
  return (
    <>
      <ImageViewerProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/company/:id" element={<WorkExperience />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
        <ImageViewer />
      </ImageViewerProvider>
    </>
  );
};

export default Layout;
