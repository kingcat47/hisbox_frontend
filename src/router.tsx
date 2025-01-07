import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { First_page } from "./page/First/First";
import { SignIn_page } from "./page/Signin/Signin";
import { SignUp_page } from "./page/Signup/Signup";
import { AddMusic_Page } from "./page/AddMusic";
import { More_Page } from "./page/More";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/signup", element: <SignUp_page /> },
      {
        path: "/signin",
        element: <SignIn_page />,
      },
      { path: "/first", element: <First_page /> },
      {
        path: "/add",
        element: <AddMusic_Page />,
      },
      {
        path: "more",
        element: (
          <>
            <More_Page />
          </>
        ),
      },
    ],
  },
]);

export { router };
