import Header from '../components/Header';
import Footer from '../components/Footer';
import {Outlet} from "react-router-dom";
import '../assets/scss/main.scss';

function Root() {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <Outlet/>
      </div>
      <Footer />
    </>
  );
}

export default Root;