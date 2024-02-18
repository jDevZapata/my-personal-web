import "./company-description.css";
import details from "../constants/details";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GoBackButton from "../components/go-back-button/GoBackButton";
import { CompanyDescriptionProps } from "../types/companyDescription";

const CompanyDescription = () => {
  const { id } = useParams();
  const [company, setCompany] = useState<CompanyDescriptionProps>();

  useEffect(() => {
    const comp = details.find((detail) => detail.id === Number(id));
    setCompany(comp);
  }, [id]);

  return (
    <div className="company-description">
      <GoBackButton />
      {company && (
        <>
          <div className="company-title">
            <h2>{company.name}</h2>
            <img
              src={`${process.env.PUBLIC_URL}/images/assets/${company.img}.png`}
              alt={company.name}
              className="company-logo"
            ></img>
          </div>
          <p>{company.description}</p>
          {company.myExperience.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
          <p className="links">
            Links Utiles:
            {company.experienceLinks.map((experienece) => (
              <a href={experienece.link} target="_blank" rel="noreferrer">
                {`${experienece.label} `}
              </a>
            ))}
          </p>
          <p>
            Tecnologías: <b>{company.technologies.join(", ")}.</b>
          </p>
          {company.projects && (
            <p>
              Proyectos: <b>{company.projects.join(", ")}.</b>
            </p>
          )}
          <p>
            Tiempo trabajado: {company.workedTime.from} hasta{" "}
            {company.workedTime.to}
          </p>
        </>
      )}
    </div>
  );
};

export default CompanyDescription;
