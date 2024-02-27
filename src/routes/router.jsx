import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact"
import About from "../pages/About/About.jsx"
import { getToDoList } from "../services/todos-sevices.js";
import Add from "../pages/Add/Add.jsx";
import Edit from "../pages/Edit/Edit.jsx";
import Nav from "../components/Nav/Nav.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav/>,
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

/* import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutes; */

