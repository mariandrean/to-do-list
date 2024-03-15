import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Contact from "../pages/Contact/Contact.jsx"
import About from "../pages/About/About.jsx"
import { getToDoList } from "../services/todos-sevices.js";
import Add from "../pages/Add/Add.jsx";
import Edit from "../pages/Edit/Edit.jsx";
import Nav from "../components/Nav/Nav.jsx";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getToDoList,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/edit/:id",
        element: <Edit />,
      }
    ]
  }  
]);

export default router;

