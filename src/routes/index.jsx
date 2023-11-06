import Header from '../components/Header';
import {Outlet} from "react-router-dom";

function Root() {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <Outlet/>
      </div>
    </>
  );
}

export default Root;