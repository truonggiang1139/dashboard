import { useRoutes } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./layouts/main-layout";

import { DashBoard } from "./pages/dashboard";
import { path } from "./constants";
import { PostsManagement } from "./pages/posts-management";
import { Settings } from "./pages/settings";
import { Subcription } from "./pages/dashboard/subcription";
import { Revenue } from "./pages/dashboard/revenue";

function App() {
  const routeElements = useRoutes([
    {
      path: "",
      element: <DashBoard />
    },

    {
      path: path.dashboard,
      element: <DashBoard />,
      children: [
        {
          path: path.subcription,
          element: <Subcription />
        },
        {
          path: path.revenue,
          element: <Revenue />
        }
      ]
    },
    {
      path: path.post,
      element: <PostsManagement />
    },
    {
      path: path.settings,
      element: <Settings />
    }
  ]);
  return (
    <div className="">
      <MainLayout>{routeElements}</MainLayout>
    </div>
  );
}

export default App;
