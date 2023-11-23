import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import HomeTwo from './../Pages/HomeTwo';

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
    ],
  },
]);
