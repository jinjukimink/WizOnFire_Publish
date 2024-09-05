import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/landing/Home";
import NotFound from "../components/NotFound";
import BoxScore from "../pages/regular/BoxScore";
import Ranking from "../pages/regular/Ranking";

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
        path: "/game/regular/boxscore",
        element: <BoxScore />,
      },
      {
        path: "/game/regular/ranking/team",
        element: <Ranking />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
