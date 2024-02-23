import "./work-experience.css";
import details from "../../constants/details";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GoBackButton from "../../components/go-back-button/GoBackButton";
import { CompanyDescription } from "../../types/companyDescription";

const WorkExperience = () => {
  const { id } = useParams();
  const [company, setCompany] = useState<CompanyDescription>();
  const navigate = useNavigate();

  useEffect(() => {
    const comp = details.find((detail) => detail.id === Number(id));
    comp ? setCompany(comp) : navigate("/not-found");
  }, [id, navigate]);

  return (
    <div className="company-description" data-testid="work-experience">
      <GoBackButton />
      {company && (
        <>
          <div className="company-title">
            <h2>{company.name}</h2>
            <img
              src={`${process.env.PUBLIC_URL}/images/assets/${company.img}.png`}
              alt={company.name}
              className="company-logo"
            />
          </div>
          <p>{company.description}</p>
          {company.myExperience.map((paragraph, i) => (
            <p key={"wed" + i}>{paragraph}</p>
          ))}
          <p className="links">
            Links Utiles:
            {company.experienceLinks.map((experienece) => (
              <a
                key={experienece.id}
                href={experienece.link}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
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

export default WorkExperience;
