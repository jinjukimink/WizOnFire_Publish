import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";
import SideBar from "../components/common/Sidebar";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "ktwiz",
        children: [
          {
            path: "about",
            element: <SideBar />, 
          },
          {
            path: "history",
            element: <SideBar />, 
          }
        ]
      },
      {
        path: "wizpark",
        children: [
          {
            path: "intro",
            element: <SideBar />, 
          },
          {
            path: "guide",
            element: <SideBar />, 
          },
          {
            path: "location",
            element: <SideBar />, 
          }
        ]
      },
      {
        path: "game/regular",
        children: [
          {
            path: "schedule",
            element: <SideBar />, 
          },
          {
            path: "boxscore",
            element: <SideBar />, 
          },
          {
            path: "ranking",
            element: <SideBar />, 
          },
          {
            path: "watchPoint",
            element: <SideBar />, 
          },
        ]
      },
      {
        path: "player",
        children: [
          {
            path: "coach",
            element: <SideBar />,
          },
          {
            path: "pitcher",
            element: <SideBar />,
          },
          {
            path: "catcher",
            element: <SideBar />,
          },
          {
            path: "cheer",
            element: <SideBar />,
          },
        ]
      },
      {
        path: "media",
        children: [
          {
            path: "wiznews",
            element: <SideBar />,
          },
          {
            path: "wizpress",
            element: <SideBar />,
          },
        ]
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
