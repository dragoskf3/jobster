import { Landing, Error, Register } from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <Error />,
    children: [
      {
        element: <Stats />,
        index: true,
      },
      {
        element: <AllJobs />,
        path: "all-jobs",
      },
      {
        element: <AddJob />,
        path: "add-job",
      },
      {
        element: <Profile />,
        path: "profile",
      },
    ],
  },
  {
    path: "landing",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
