import technologies from "../../constants/technologies";
import { Technology } from "../../types/technology";
import programmingIcon from "../../assets/icons/sections/programming.png";
import "./technologies.css";

const Technologies = () => {
  return (
    <section id="technologies" data-testid="technologies">
      <div className="title-contaier">
        <h2 className="title">Technologias</h2>
        <img src={programmingIcon} alt="techs" className="icon"/>
      </div>
      <div className="description">
        Durante los últimos 10 años, he adquirido experiencia trabajando con una
        amplia variedad de bibliotecas, frameworks y metodologías. En esta
        sección, me gustaría destacar aquellas con las que he dedicado más
        tiempo y he profundizado mi conocimiento.
      </div>
      <div className="technologies-container">
        {technologies.map((technology: Technology) => (
          <span key={technology.id} className="technology">
            <img src={technology.icon} alt={technology.name} className="tech-icon"/>
            {technology.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
