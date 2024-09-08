import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";
// import BoxScore from "../pages/regular/BoxScore";
// import Ranking from "../pages/regular/Ranking";
// import News from "../pages/news/News";

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
        path: "ktwiz",
        children: [
          {
            path: "about",
            element: <Layout />, 
          },
          {
            path: "history",
            element: <Layout />, 
          }
        ]
      },
      {
        path: "wizpark",
        children: [
          {
            path: "intro",
            element: <Layout />, 
          },
          {
            path: "guide",
            element: <Layout />, 
          },
          {
            path: "location",
            element: <Layout />, 
          }
        ]
      },
      {
        path: "game/regular",
        children: [
          {
            path: "schedule",
            element: <Layout />, 
          },
          {
            path: "boxscore",
            element: <Layout />, 
          },
          {
            path: "ranking",
            element: <Layout />, 
          },
          {
            path: "watchPoint",
            element: <Layout />, 
          },
        ]
      },
      {
        path: "player",
        children: [
          {
            path: "coach",
            element: <Layout />,
          },
          {
            path: "pitcher",
            element: <Layout />,
          },
          {
            path: "catcher",
            element: <Layout />,
          },
          {
            path: "cheer",
            element: <Layout />,
          },
        ]
      },
      {
        path: "media",
        children: [
          {
            path: "wiznews",
            element: <Layout />,
          },
          {
            path: "wizpress",
            element: <Layout />,
          },
        ]
      }
      // {
      //   path:"game/regular",
      //   children: [
      //     {
      //       path:"boxscore",
      //       element: <BoxScore />,
      //     },
      //     {
      //       path:"ranking/team",
      //       element: <Ranking />,
      //     },
      //   ],
      // },
      // {
      //   path:"media/wiznews",
      //   element: <News />
      // },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
