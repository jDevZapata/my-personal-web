import { useState } from "react";
import "./education.css";
import ImageViewer from "../common/image-viewer/ImageViewer";
import diploma from "../../assets/education/diploma.jpg";

const Education = () => {
  const [showDiploma, setShowDiploma] = useState(false);

  return (
    <section id="education">
      <h2 className="title">Estudios</h2>
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
          desarrollo que los componen, analizar los requerimientos iniciales que
          los hicieron nacer y el proceso completo para llegar a su
          implementación.
        </p>
        <p>
          La carrera incluye conocimientos sobre la teoría que fundamenta el
          análisis y desarrollo de los sistemas, diversos lenguajes de
          desarrollo de software, una visión general sobre sistemas operativos y
          el hardware donde se gestionan, conocimientos sobre la gestión de los
          motores gestores de bases de datos y ciertos principios de seguridad
          informática. Como complemento, sólidos conocimientos de matemática,
          inglés técnico y probabilidad y estadística.
        </p>
        <button onClick={() => setShowDiploma(true)}>ver diploma</button>
      </div>
      <h2 className="title">Certificaciones</h2>
      <div className="description">
        <p>
          Las 2 Certificaciones más importantes que hice en el último tiempo en{" "}
          <strong>Udemy</strong> son:
          <a
            href="https://www.udemy.com/certificate/UC-78708101-b8dd-4068-9296-2c30c6cc7ba1/"
            target="_blank"
            rel="noreferrer"
          >
            React - Guía definitiva
          </a>
          <a
            href="https://www.udemy.com/certificate/UC-104025bc-a6f0-4106-b041-d71dad522fe6/"
            target="_blank"
            rel="noreferrer"
          >
            Git - Integración continua
          </a>
        </p>
        {showDiploma && (
          <ImageViewer
            title="Diploma"
            closeImageViewer={async () => setShowDiploma(false)}
          >
            <img src={diploma} alt="diploma" className="diploma" />
          </ImageViewer>
        )}
      </div>
    </section>
  );
};

export default Education;
