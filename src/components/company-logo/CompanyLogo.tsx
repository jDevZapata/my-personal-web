import { Link } from "react-router-dom";
import { CompanyLogoProps } from "../../types/logo";

const CompanyLogo = ({ company }: CompanyLogoProps) => {
  const { id, name, alt } = company;
  return (
    <Link to={`/company/${id}`} style={{ textDecoration: "none" }}>
      <span className="clickable company-logo">
        <img
          src={`${process.env.PUBLIC_URL}/images/assets/${name}.png`}
          alt={alt}
          title="más detalles"
        />
      </span>
      <div className="see-more-link link">Ver más</div>
    </Link>
  );
};

export default CompanyLogo;
