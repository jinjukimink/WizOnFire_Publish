import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/landing/Home";
import NotFound from "../components/NotFound";
import BoxScore from "../pages/regular/BoxScore";
import Ranking from "../pages/regular/Ranking";
import News from "../pages/news/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path:"game/regular",
        children: [
          {
            path:"boxscore",
            element: <BoxScore />,
          },
          {
            path:"ranking/team",
            element: <Ranking />,
          },
        ],
      },
      {
        path:"media/wiznews",
        element: <News />
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
