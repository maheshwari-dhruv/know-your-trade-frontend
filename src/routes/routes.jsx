import { App } from "../App";
import { homePageLoader } from "../loaders/home-page-loader";
import { postPageLoader } from "../loaders/post-page-loader";
import { About } from "../pages/about-page";
import { ErrorPage } from "../pages/error/error-page";
import { Home } from "../pages/home-page";
import { PostPage } from "../pages/post-page";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} loader={homePageLoader} />
      <Route path="about" element={<About />} />
      <Route
        path="post/:postTitle"
        element={<PostPage />}
        loader={postPageLoader}
      />
    </Route>
  )
);
