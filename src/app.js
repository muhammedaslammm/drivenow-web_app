import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home";
import SelectedSegment from "./components/SelectedSegment";
import CarPage from "./components/CarPage";
import Error from "./components/Error";
import AboutUs from "./components/AboutUs";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

let Application = () => {
  return (
    <div className="application">
      <Header />
      <Outlet />
    </div>
  );
};

let routingConfig = createBrowserRouter([
  {
    path: "/",
    element: <Application />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "aboutus", element: <AboutUs /> },
      {
        path: "segment/:segment",
        element: <SelectedSegment />,
      },
      { path: "*", element: <Error /> },
    ],
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routingConfig} />);
