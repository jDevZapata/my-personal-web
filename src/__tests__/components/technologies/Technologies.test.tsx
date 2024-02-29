import { render, screen } from "@testing-library/react";
import Technologies from "../../../components/technologies/Technologies";

describe("Technologies component", () => {
  test("should render Technologies title", () => {
    render(<Technologies />);
    const technologiesTitle = screen.getByText("Tecnologías");
    expect(technologiesTitle).toBeInTheDocument();
  });

  test("should render some technology icons", () => {
    render(<Technologies />);
    const html5Icon = screen.getByAltText("HTML5");
    const javascriptIcon = screen.getByAltText("Javascript");
    const css3Icon = screen.getByAltText("CSS3");
    expect(html5Icon).toBeInTheDocument();
    expect(javascriptIcon).toBeInTheDocument();
    expect(css3Icon).toBeInTheDocument();
  });
});
