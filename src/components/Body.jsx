import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./HomePage";
import Home from "./Home";
import FilmProduction from "./FilmProduction";
import Branding from "./Branding";
import ArtCuration from "./ArtCuration";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/services/film-production",
        element: <FilmProduction />,
      },
      {
        path: "/services/branding",
        element: <Branding />,
      },
      {
        path: "/services/art-curation",
        element: <ArtCuration />,
      },
    ],
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
