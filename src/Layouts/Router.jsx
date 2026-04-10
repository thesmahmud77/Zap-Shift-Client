import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";

// https://www.figma.com/design/3QjpLWTrjlBbAGOOObuNVw/zap-shift--Copy-?node-id=2023-1040&t=n0kk5rgNg25Adaz0-0

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);
