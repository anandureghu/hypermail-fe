import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import GeneratePage from "../pages/GeneratePage";

const AllRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/generate",
      element: <GeneratePage />,
    },
  ]);
};

export default AllRoutes;
