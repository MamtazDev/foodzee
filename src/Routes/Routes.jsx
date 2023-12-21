import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Contact from "../Pages/Contact";
import Cookie from "../Pages/Cookie";
import CreateAccount from "../Pages/CreateAccount";
import Home from "../Pages/Home";
import Mission from "../Pages/Mission";
import Press from "../Pages/Press";
import Privacy from "../Pages/Privacy";
import Support from "../Pages/Support";
import Terms from "../Pages/Terms";
import HomeTwo from "./../Pages/HomeTwo";

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
      {
        path: "/terms-of-conditions",
        element: <Terms />,
      },
      {
        path: "/privacy-policy",
        element: <Privacy />,
      },
      {
        path: "/cookie-policy",
        element: <Cookie />,
      },
      {
        path: "/create-account",
        element: <CreateAccount />,
      },
    ],
  },
]);
