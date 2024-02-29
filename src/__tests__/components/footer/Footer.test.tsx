import { render, screen } from "@testing-library/react";
import Footer from "../../../components/footer/Footer";

describe("Footer Component", () => {
  test("should render", () => {
    render(<Footer />);
  });

  test("should render personal information and social media", () => {
    render(<Footer />);
    const personalInformationElement = screen.getByTestId(
      "personal-information"
    );
    const socialMediaElement = screen.getByTestId("social-media");
    expect(personalInformationElement).toBeInTheDocument();
    expect(socialMediaElement).toBeInTheDocument();
  });

  test("should render email, phone and address icons", () => {
    render(<Footer />);
    const emailIcon = screen.getByAltText("email");
    const phoneIcon = screen.getByAltText("phone");
    const addressIcon = screen.getByAltText("address");
    expect(emailIcon).toBeInTheDocument();
    expect(phoneIcon).toBeInTheDocument();
    expect(addressIcon).toBeInTheDocument();
  });

  test("should render copyright", () => {
    render(<Footer />);
    const ownersName = screen.getByTestId("copyright");
    expect(ownersName).toBeInTheDocument();
  });
});
