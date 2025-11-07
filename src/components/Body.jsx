import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./HomePage";
import Home from "./Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
