import "./presentation.css";

const Presentation = () => {
  return (
    <section id="presentation" data-testid="presentation">
      <h1 className="title-centered">Frontend Developer</h1>
      <div className="presentation-container">
        <div className="presentation">
          <div>
            <p>
              Hola! mi nombre es Jesús y soy desarrollador Frontend con más de
              10 años de experiencia, graduado en la tecnicatura universitaria
              "Analista de Sistemas" de la Universidad John F. Kennedy.
            </p>
            <p>
              Decicidí crear este sitio web para todas las personas que deseen
              conocer más detalles sobre mi experiencia profesional.
            </p>
            <br />
            <p>
              <span className="phrase">
                "El éxito no es la clave de la felicidad. La felicidad es la
                clave del éxito. Si amas lo que haces, tendrás éxito." - Albert
                Schweitzer
              </span>
            </p>
          </div>
          <span className="centered-img">
            <img
              src={process.env.PUBLIC_URL + "/images/hand.png"}
              alt="hand"
              className="hand"
            />
          </span>
          <span className="centered-img">
            <img
              src={process.env.PUBLIC_URL + "/images/profile.png"}
              alt="my-face"
              className="profile"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
