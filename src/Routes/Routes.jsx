import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import HomeTwo from "./../Pages/HomeTwo";
import Mission from "../Pages/Mission";
import Contact from "../Pages/Contact";
import Press from "../Pages/Press";
import Support from "../Pages/Support";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/resturant-view",
        element: <HomeTwo />,
      },
      {
        path: "/mission",
        element: <Mission />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/press",
        element: <Press />,
      },
      {
        path: "/support",
        element: <Support />,
      },
    ],
  },
]);
