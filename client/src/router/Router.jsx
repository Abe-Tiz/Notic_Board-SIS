import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Hero from "../components/Hero";
import Signup from './../pages/auth/Signup';
import Login from "../pages/auth/Login";
import Admin from "../layout/Admin";
import News from "../pages/news/News";
import Feature from "../pages/features/Feature";
import Request from "../pages/Request/Request";
import Display from "../components/Display";
import CreatePost from "../pages/dashboard/posts/CreatePost";
import ListPost from "../pages/dashboard/posts/ListPost";
import PrivateRoute from "../privateRoute/PrivateRoute";
import DisplayPost from "../pages/dashboard/posts/DisplayPost";
import ActivateAccount from "../pages/dashboard/manage user/ActivateAccount";
import Send from './../pages/dashboard/posts/Send';

 

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
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/feature",
        element: <Feature />,
      },
      {
        path: "/request",
        element: <Request />,
      },
      {
        path: "list-news",
        element: (
          <PrivateRoute>
            <ListPost />
          </PrivateRoute>
        ),
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
      {
        path: "display-user",
        element: <Display />,
      },
      {
        path: "post-news",
        element: <CreatePost />,
      },
      {
        path: "list-news",
        element: <DisplayPost />,
      },
      {
        path: "activate",
        element: <ActivateAccount />,
      },
      {
        path: "send/:id",
        element: <Send />,
      },
    ],
  },
]);

export default router;
