import { render, screen } from "@testing-library/react";
import WorkExperience from "../../../screens/work-experience/WorkExperience";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import NotFound from "../../../screens/not-found/NotFound";

describe("WorkExperience component", () => {
  test("should render work experience Element", () => {
    render(
      <MemoryRouter initialEntries={["/company/2013"]}>
        <Routes>
          <Route path="/company/:id" element={<WorkExperience />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );
    const workExperienceElement = screen.getByTestId("work-experience");
    expect(workExperienceElement).toHaveTextContent("Thomson Reuters");
  });

  test("should render not found screen if company is unknown", () => {
    render(
      <MemoryRouter initialEntries={["/company/unknown"]}>
        <Routes>
          <Route path="/company/:id" element={<WorkExperience />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );
    const notFoundElement = screen.getByTestId("not-found");
    expect(notFoundElement).toBeInTheDocument();
  });
});
