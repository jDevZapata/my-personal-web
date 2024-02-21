import { useEffect } from "react";
import { useImageViewerContext } from "../../context/ImageViewerContext";
import diploma from "../../assets/education/diploma.png";
import diplomaIcon from "../../assets/icons/sections/diploma.png";
import educationIcon from "../../assets/icons/sections/education.png";
import certificationIcon from "../../assets/icons/sections/certification.png";

import "./education.css";

const Education = () => {
  const { setShowImageViewer, setTitle, setImgUrl } = useImageViewerContext();

  useEffect(() => {
    setTitle("Diploma");
    setImgUrl(diploma);
  }, [setImgUrl, setTitle]);

  return (
    <section id="education">
      <div className="university">
        <div className="title-contaier">
          <h2 className="title">Estudios Universitarios</h2>
          <img src={educationIcon} alt="education" className="icon"/>
        </div>
        <div className="description">
          <p>
            Obtuve mi título universitario en{" "}
            <strong>Analista de Sistemas</strong> en la Universidad{" "}
            <strong>Argentina John F. Kennedy</strong> en el año 2017,
            destacándome con un promedio notable de <strong>7.59</strong>
          </p>
          <p>
            El título de <strong>Analista de Sistemas</strong> de la{" "}
            <strong>Universidad Argentina John F. Kennedy</strong> brinda los
            conocimientos para comprender el funcionamiento de los grandes
            sistemas de información actuales y las ditintas tecnologías de
            desarrollo que los componen, analizar los requerimientos iniciales
            que los hicieron nacer y el proceso completo para llegar a su
            implementación.
          </p>
          <p>
            La carrera incluye conocimientos sobre la teoría que fundamenta el
            análisis y desarrollo de los sistemas, diversos lenguajes de
            desarrollo de software, una visión general sobre sistemas operativos
            y el hardware donde se gestionan, conocimientos sobre la gestión de
            los motores gestores de bases de datos y ciertos principios de
            seguridad informática. Como complemento, sólidos conocimientos de
            matemática, inglés técnico y probabilidad y estadística.
          </p>
          {
            <span
              onClick={() => setShowImageViewer(true)}
              className="show-diploma clickable link"
            >
              <img
                src={diplomaIcon}
                alt="diploma"
                className="diploma-icon"
              />
              Ver diploma
            </span>
          }
        </div>
      </div>
      <div className="certifications">
        <div className="title-contaier">
          <h2 className="title">Certificaciones</h2>
          <img
            src={certificationIcon}
            alt="certification"
            className="icon"
          />
        </div>
        <div className="description">
          <p>
            Las 2 Certificaciones más importantes que hice en el último tiempo
            en <strong>Udemy</strong> son:
            <a
              href="https://www.udemy.com/certificate/UC-78708101-b8dd-4068-9296-2c30c6cc7ba1/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              React - Guía definitiva
            </a>
            <a
              href="https://www.udemy.com/certificate/UC-104025bc-a6f0-4106-b041-d71dad522fe6/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Git - Integración continua
            </a>
          </p>
          <p>
            Nivel de Inglés alcanzado en <strong>English Services</strong>:{" "}
            <strong>B2</strong> (Upper Intermidiate)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
