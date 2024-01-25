import companies from "../../constants/companies";

import "./experience.css";
import CompanyLogo from "../company-logo/CompanyLogo";

const Experienece = () => {
  return (
    <>
      <h1>Empresas en las que trabajé</h1>
      <div className="experience-container">
        {companies.map((company) => (
          <CompanyLogo key={company.id} company={company} />
        ))}
      </div>
    </>
  );
};

export default Experienece;
