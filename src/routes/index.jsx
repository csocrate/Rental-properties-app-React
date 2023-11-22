import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import '../assets/scss/main.scss';

function Root() {
  return (
    <>
      <Header />
      <main className="main">
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Root;
