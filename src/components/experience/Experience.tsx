import thomson from "../../assets/thomson.png";
import softtek from "../../assets/softtek.png";
import globant from "../../assets/globant.png";
import baufest from "../../assets/baufest.png";

import "./experience.css";

const Experienece = () => {
  return (
    <>
      <h1>Empresas en las que trabajé</h1>
      <div className="experience-container">
        <span className="clickable over">
          <img src={thomson} alt="Thomson"></img>
        </span>
        <span className="clickable">
          <img src={softtek} alt="Softtek"></img>
        </span>
        <span className="clickable">
          <img src={globant} alt="Globant"></img>
        </span>
        <span className="clickable">
          <img src={baufest} alt="Baufest"></img>
        </span>
      </div>
    </>
  );
};

export default Experienece;
