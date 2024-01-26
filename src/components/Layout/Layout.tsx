import CompanyDescription from "../../screens/CompanyDescription";
import Content from "../content/Content";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/company/:id" element={<CompanyDescription />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default Layout;
