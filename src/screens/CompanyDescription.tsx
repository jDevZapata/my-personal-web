import "./company-description.css";
import details from "../constants/details";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CompanyDescription = () => {
  const { id } = useParams();

  const [company, setCompany] = useState<{
    id: number;
    name: string;
    description: string;
    myExperience: string[];
    technologies: string[];
    projects: string[];
    workedTime: { from: string, to: string};
  }>();

  useEffect(() => {
    const comp = details.find((detail) => detail.id === Number(id));
    setCompany(comp);
  }, [id]);

  return (
    <div className="company-description">
      {company && (
        <>
          <h2>{company.name}</h2>
          <p>{company.description}</p>
          {company.myExperience.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
          <p>Trabajé con las siguientes tecnologías: {company.technologies.join(", ")}.</p>
          <p>Proyectos en los que participé: {company.projects.join(", ")}.</p>
          <p>Tiempo trabajado: {company.workedTime.from} hasta {company.workedTime.to}</p>
        </>
      )}
    </div>
  );
};

export default CompanyDescription;
