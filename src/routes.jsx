import App from "./App";
import Planet from "./pages/Planet";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Planet />,
      },
      {
        path: "/:planetName",
        element: <Planet />,
      },
    ],
  },
];
export default routes;
