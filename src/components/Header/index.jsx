import {NavLink} from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <>
      <header className="header-site">
        <div>
          <a href="#">
            <img src={logo} alt="Kasa" width="100" height="auto"/>
          </a>
          <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/a-propos">A propos</NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;