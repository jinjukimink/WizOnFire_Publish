import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/landing/Home";
import NotFound from "../components/NotFound";
import Test from "../pages/Test"

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
        path:"test",
        element:<Test/>
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
