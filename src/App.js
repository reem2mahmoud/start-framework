import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio"
import Contacts from "./Components/Contacts/Contacts"

import NotFound from "./Components/NotFound";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home></Home> },
        { path: "about", element: <About></About> },
        { path: "portfolio", element: <Portfolio></Portfolio> },
        { path: "contacts", element: <Contacts></Contacts> },
        { path: "*", element: <NotFound></NotFound> },
      ],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}
