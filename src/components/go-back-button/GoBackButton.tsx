import { Link } from "react-router-dom";
import left from '../../assets/icons/left.png';
import './gobackbutton.css';

const GoBackButton = () => {
  return (
    <Link to={"/"} style={{ textDecoration: "none" }} className="goBackLink" data-testid="go-back-btn">
      <img src={left} alt="left" className="back_btn" />Volver
    </Link>
  );
};

export default GoBackButton;
