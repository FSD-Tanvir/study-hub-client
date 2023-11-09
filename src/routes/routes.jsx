import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AllAssignments from "../pages/AllAssignments";
import MyAssignments from "../pages/MyAssignments";
import SubmittedAssignments from "../pages/SubmittedAssignments";
import CreateAssignment from "../pages/CreateAssignment";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound";
import ViewDetails from "../pages/ViewDetails";
import Update from "../pages/Update";
import GiveMark from "../pages/GiveMark";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-assignments",
        element: <AllAssignments />,
        loader: () => fetch("http://localhost:5000/api/v1/all-assignments"),
      },
      {
        path: "/my-assignments",
        element: (
          <PrivateRoute>
            <MyAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: "/submitted-assignments",
        element: (
          <PrivateRoute>
            <SubmittedAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: "/create-assignment",
        element: (
          <PrivateRoute>
            <CreateAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "/view-details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/all-assignments/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/all-assignments/${params.id}`),
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/give-mark/:id",
        element: (
          <PrivateRoute>
            <GiveMark />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/submitted-assignments/${params.id}`),
      },
    ],
  },
]);

export default routes;
