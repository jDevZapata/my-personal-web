import technologies from "../../constants/technologies";
import { Technology } from "../../types/technology";
import "./technologies.css";

const Technologies = () => {
  return (
    <section id="technologies">
      <h2 className="title">Technologias</h2>
      <div className="description">
        Durante los últimos 10 años, he adquirido experiencia trabajando con
        una amplia variedad de bibliotecas, frameworks y metodologías. En esta
        sección, me gustaría destacar aquellas con las que he dedicado más
        tiempo y he profundizado mi conocimiento.
      </div>
      <div className="technologies-container">
        {technologies.map((technology: Technology) => (
          <span className="technology">
            <img src={technology.icon} alt="" className="tech-icon"></img>
            {technology.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
