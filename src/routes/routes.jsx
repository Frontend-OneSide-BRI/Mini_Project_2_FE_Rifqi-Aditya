import { createBrowserRouter } from "react-router-dom";
import Landing from "@pages/Landing";
import Galleries from "@pages/Galleries";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/galleries",
    element: <Galleries />,
  },
]);
