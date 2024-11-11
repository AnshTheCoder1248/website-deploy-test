import ARSlogo from "./assets/Ansh Shah logo.png";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact Me";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
function App() {
  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
      <div>
        <img src={ARSlogo} className="logo" />
      </div>
    </>
  );
}

export default App;
