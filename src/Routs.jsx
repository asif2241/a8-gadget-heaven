import {
    createBrowserRouter
  } from "react-router-dom";

import { Mainlayout } from "./Mainlayout";
import Home from "./components/Home/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        }
      ]
      
    },
  ]);