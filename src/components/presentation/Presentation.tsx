import "./presentation.css";

const Presentation = () => {
  return (
    <main>
      <div className="presentation-container">
        <div className="presentation">
          <div>
            <p>
              Hola! mi nombre es Jesús Müller y soy desarrollador Frontend con
              más de 10 años de experiencia, graduado en la tecnicatura
              universitaria "Analista de Sistemas" de la Universidad John F.
              Kennedy.
            </p>
            <p>
              Decicidí crear este sitio web para todas aquellas personas que
              deseen concer más detalles sobre mi experiencia profesional.
            </p>
            <br />
            <p>
              "El éxito no es la clave de la felicidad. La felicidad es la clave
              del éxito. Si amas lo que haces, tendrás éxito." - Albert
              Schweitzer
            </p>
          </div>
          <span className="centered-img">
            <img
              src={process.env.PUBLIC_URL + "/images/hand.png"}
              alt="hand"
              className="hand"
            ></img>
          </span>
          <span className="centered-img">
            <img
              src={process.env.PUBLIC_URL + "/images/profile.png"}
              alt="my face"
              className="profile"
            ></img>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Presentation;
