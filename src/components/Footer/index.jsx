import logo_light from "../../assets/images/logo_light.svg";

function Footer() {
  return (
    <>
      <footer className="footer-site">
        <div>
          <a href="#">
            <img src={logo_light} alt="Kasa" width="100" height="auto"/>
          </a>
          <small>© 2023 Kasa. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}

export default Footer;