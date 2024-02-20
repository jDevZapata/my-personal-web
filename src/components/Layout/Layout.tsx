import { ImageViewerProvider } from "../../context/ImageViewerContext";
import CompanyDescription from "../../screens/CompanyDescription";
import ImageViewer from "../common/image-viewer/ImageViewer";
import Content from "../content/Content";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ImageViewerProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Content />}></Route>
            <Route path="/company/:id" element={<CompanyDescription />}></Route>
          </Routes>
        </Router>
        <Footer />
        <ImageViewer />
      </ImageViewerProvider>
    </>
  );
};

export default Layout;
