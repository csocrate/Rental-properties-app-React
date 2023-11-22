import logo_light from '../../assets/images/logo_light.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer-site">
        <div>
          <Link to="/">
            <img
              src={logo_light}
              alt="Kasa"
              width="100"
              height="auto"
              loading="lazy"
            />
          </Link>
          <small>© 2023 Kasa. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}

export default Footer;
