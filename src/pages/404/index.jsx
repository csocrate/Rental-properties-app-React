import { useRouteError } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function NotFound() {
  const error = useRouteError();
  console.log(error);

  const message = ' vous demandez n\'existe pas.';
  const home = 'Retourner sur la page d\'accueil';

  return (
    <>
      <Header />
      <main>
        <section id="error-page" className="not-found">
          <h1>
            {error.status}
          </h1>
          <p>
            <span>
              Oups! La page que
            </span>
            <span>
              {message}
            </span>
          </p>
          <a href="/">
            <small>
              {home}            
            </small>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;