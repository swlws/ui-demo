import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "./error-page";
import Connect from "../view/connect/connect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{ path: "contacts/:contactId", element: <Connect /> }],
  },
  // {
  //   path: "contacts/:contactId",
  //   element: <Connect />,
  // },
]);

export default router;
