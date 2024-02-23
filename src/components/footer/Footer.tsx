import { useEffect, useState } from "react";
import emailIcon from "../../assets/icons/footer/email.png";
import phoneIcon from "../../assets/icons/footer/phone.png";
import addressIcon from "../../assets/icons/footer/address.png";
import linkedinIcon from "../../assets/icons/footer/linkedin.png";
import githubIcon from "../../assets/icons/techs/github.png";
import "./footer.css";

const Footer = () => {
  const [year, setYear] = useState("");
  useEffect(() => {
    const today = new Date();
    setYear(today.getFullYear().toString());
  }, []);

  return (
    <footer  data-testid="footer">
      <h4>Información de contacto</h4>
      <div className="personal-information">
        <div className="info-container">
          <img src={emailIcon} alt="email" className="icon" />
          jhzapata.dev@gmail.com
        </div>
        <div className="info-container">
          <img src={phoneIcon} alt="phone" className="icon" />
          +5491123046911
        </div>
        <div className="info-container">
          <img src={addressIcon} alt="address" className="icon" />
          Villa Santa Rita, CABA, Argentina
        </div>
      </div>
      <h4>Información profesional</h4>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/jesus-m%C3%BCller-38a9a72a6/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="address" className="icon" />
        </a>
        <a
          href="https://github.com/jDevZapata/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="address" className="icon" />
        </a>
      </div>
      {`© ${year} Jesus Müller - Frontend Developer`}
    </footer>
  );
};

export default Footer;
