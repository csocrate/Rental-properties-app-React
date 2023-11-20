import {NavLink, Link} from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <>
      <header className="header-site">
        <div>
          <Link to="/">
            <img src={logo} alt="Kasa" width="100" height="auto"/>
          </Link>
          <nav>
            <ul>
              <li>
                <NavLink to="/">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/a-propos">
                  A propos
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;