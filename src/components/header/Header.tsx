import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header data-testid="header">
      <Link to={`/`} style={{ textDecoration: 'none' }}><span className="logo centered-flex">JM</span></Link>
      <div className="position centered-flex">Jesús Müller</div>
    </header>
  );
};

export default Header;
