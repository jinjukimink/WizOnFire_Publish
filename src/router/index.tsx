import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
// import Home from "../pages/Home";
import NotFound from "../components/NotFound";
import Intro from "../components/common/Wizpark";
import Ktwiz from "../components/common/Ktwiz";
import Wizpark from "../components/common/Wizpark";
import Game from "../components/common/Game";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'ktwiz/about', //사이드바 가장 왼쪽 버튼을 기준으로 컴포넌트를 나눔.
        element: <Ktwiz />,
      },
      {
        path: 'ktwiz/history',  // 구단 연혁 경로 추가
        element: <Ktwiz />,     // 같은 About 컴포넌트를 사용
      },
      {
        path: 'wizpark/intro', // 이하 동문
        element:<Wizpark/>,
      },
      {
        path: 'wizpark/guide',
        element:<Wizpark/>,
      },
      {
        path: 'game/regular/schedule',
        element:<Game/>,
      },
      {
        path: 'game/regular/boxscore',
        element:<Game/>,
      },
      {
        path: 'game/regular/ranking/',
        element:<Game/>,
      },
      {
        path: 'game/regular/watchPoint',
        element:<Game/>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
