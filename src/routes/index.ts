import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages//auth/Login";
import Register from "../pages/auth/Register";
import ErrorPage from "../pages/ErrorPage";

export const route = createBrowserRouter([
  {
    path: "/",
    Component: App,
    ErrorBoundary: ErrorPage,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);
