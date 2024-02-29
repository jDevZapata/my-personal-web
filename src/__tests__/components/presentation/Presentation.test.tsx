import { render, screen } from "@testing-library/react";
import Presentation from "../../../components/presentation/Presentation";

describe("GoBackButton component", () => {
  test("should render position in a title", () => {
    render(<Presentation />);
    const position = screen.getByText("Frontend Developer");
    expect(position).toBeInTheDocument();
  });

  test("should render a hand icon", () => {
    render(<Presentation />);
    const handIcon = screen.getByAltText("hand");
    expect(handIcon).toBeInTheDocument();
  });

  test("should render a personal photo", () => {
    render(<Presentation />);
    const personalPhotoElement = screen.getByAltText("my-face");
    expect(personalPhotoElement).toBeInTheDocument();
  });
});
