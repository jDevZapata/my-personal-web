interface CompanyLogoProps {
  company: {
    id: number;
    name: string;
    alt: string;
  };
}

const CompanyLogo = ({ company }: CompanyLogoProps) => {
  const { name, alt } = company;
  return (
    <span className="clickable company-logo">
      <img
        src={`${process.env.PUBLIC_URL}/images/assets/${name}.png`}
        alt={alt}
        title="más detalles"
      ></img>
    </span>
  );
};

export default CompanyLogo;
