import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Hero from "../components/Hero";
import Signup from './../pages/auth/Signup';
import Login from "../pages/auth/Login";
import Admin from "../layout/Admin";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
