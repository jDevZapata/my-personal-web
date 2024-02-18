import companies from "../../constants/companies";

import "./experience.css";
import CompanyLogo from "../company-logo/CompanyLogo";

const Experienece = () => {
  return (
    <section id="companies">
      <h2>Empresas en las que trabajé</h2>
      <div className="experience-container">
        {companies.map((company) => (
          <CompanyLogo key={company.id} company={company} />
        ))}
      </div>
    </section>
  );
};

export default Experienece;
