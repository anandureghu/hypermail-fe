import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import EmailSendPage from "../pages/EmailSendPage";

const AllRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/email",
      element: <EmailSendPage />,
    },
  ]);
};

export default AllRoutes;
