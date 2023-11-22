import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./routes/index.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
    <ToastContainer />
  </React.StrictMode>
);
