import { App } from "../App";
import { About } from "../pages/about-page";
import { ErrorPage } from "../pages/error/error-page";
import { Home } from "../pages/home-page";
import { PostPage } from "../pages/post-page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/post/:postTitle",
        element: <PostPage />,
      },
    ],
  },
]);
