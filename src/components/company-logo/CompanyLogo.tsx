import { Link } from "react-router-dom";
interface CompanyLogoProps {
  company: {
    id: number;
    name: string;
    alt: string;
  };
}

const CompanyLogo = ({ company }: CompanyLogoProps) => {
  const { id, name, alt } = company;
  return (
    <Link to={`/company/${id}`} style={{ textDecoration: "none" }}>
      <span className="clickable company-logo">
        <img
          src={`${process.env.PUBLIC_URL}/images/assets/${name}.png`}
          alt={alt}
          title="más detalles"
        ></img>
      </span>
      <span className="see-more-link">Ver más</span>
    </Link>
  );
};

export default CompanyLogo;
