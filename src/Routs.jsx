import {
    createBrowserRouter
  } from "react-router-dom";

import { Mainlayout } from "./Mainlayout";
import Home from "./components/Home/Home";
import ProductDetails from "./components/ProductDetail/ProductDetails";
import Dashboard from "./components/Dashboard/Dashboard";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "dashboard",
          element: <Dashboard></Dashboard>,
          children: [
            {
              path: "cart",
              element: <Cart></Cart>
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