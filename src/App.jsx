import Home from './pages/Home';
import About from './pages/About';
import Root from './routes';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
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
