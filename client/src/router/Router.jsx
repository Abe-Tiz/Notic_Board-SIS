import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Hero from "../components/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '',
        element:<Hero />
      }
    ]
  },
]);

export default router;
