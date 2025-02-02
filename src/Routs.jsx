import {
    createBrowserRouter
  } from "react-router-dom";

import { Mainlayout } from "./Mainlayout";
import Home from "./components/Home/Home";
import ProductDetails from "./components/ProductDetail/ProductDetails";
import Dashboard from "./components/Dashboard/Dashboard";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import Statistics from "./components/Statistics/Statistics";
import ErrorElement from "./ErrorElement";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "statistics",
          element: <Statistics></Statistics>,
          loader: () => fetch('/gadgets.json').then(res => res.json()),
        },
        {
          path: "dashboard",
          element: <Dashboard></Dashboard>,
          loader: () => fetch('/gadgets.json').then(res => res.json()),
          children: [
            {
              index: true,
              element: <Cart></Cart>,
              
            },
            {
              path: "cart",
              element: <Cart></Cart>,
             
            },
            {
              path: "wishlist",
              element: <Wishlist></Wishlist>
            }
          ]
        },
        {
          path: "product/:productId",
          element: <ProductDetails></ProductDetails>,
          loader: ()=> fetch('/gadgets.json')
        },
      ]
      
    },
  ]);