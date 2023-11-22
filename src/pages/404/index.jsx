import { useRouteError, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function NotFound() {
  const error = useRouteError();

  const message = " vous demandez n'existe pas.";
  const home = "Retourner sur la page d'accueil";

  return (
    <>
      <Header />
      <main>
        <section id="error-page" className="not-found">
          <h1>{!error.status ? '404' : error.status}</h1>
          <p>
            <span>Oups! La page que</span>
            <span>{message}</span>
          </p>
          <Link to="/">
            <small>{home}</small>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
