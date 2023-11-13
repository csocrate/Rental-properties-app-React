import Home from './pages/Home';
import Property from './pages/Property';
import About from './pages/About';
import NotFound from './pages/404';
import Root from './routes';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'propriete/:propertyId',
        element: <Property />
      },
      {
        path: 'a-propos',
        element: <About />
      }  
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router = {router} />
    </>
  );
}

export default App;