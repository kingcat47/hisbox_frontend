import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { First_page } from "./page/First/First";
import { Sign_page } from "./page/Signin/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/sigup", element: <></> },
      {
        path: "/signin",
        element: <Sign_page />,
      },
      { path: "/first", element: <First_page /> },
    ],
  },
]);

export { router };
