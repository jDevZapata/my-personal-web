import companies from "../../constants/companies";
import workExperienceIcon from "../../assets/icons/sections/work-experience.png";
import CompanyLogo from "../company-logo/CompanyLogo";
import "./experience.css";

const Experienece = () => {
  return (
    <section id="experience" data-testid="experience">
      <div className="title-contaier">
        <h2>Experiencia laboral</h2>
        <img src={workExperienceIcon} alt="experience" className="icon"/>
      </div>
      <div className="experience-container">
        {companies.map((company) => (
          <CompanyLogo key={company.id} company={company} />
        ))}
      </div>
    </section>
  );
};

export default Experienece;
