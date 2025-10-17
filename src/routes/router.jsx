import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home Layout</h1>,
  },
  {
    path: "/auth",
    element: <h1>Auth Layout</h1>,
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "/*",
    element: <h1>404 Not Found</h1>,
  },
]);
