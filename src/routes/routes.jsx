import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AllAssignments from "../pages/AllAssignments";
import MyAssignments from "../pages/MyAssignments";
import SubmittedAssignments from "../pages/SubmittedAssignments";
import CreateAssignment from "../pages/CreateAssignment";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
        {
          index: true,  
          path: "/",
          element: <Home />,
        },
        { 
          path: "/all-assignments",
          element: <AllAssignments />,
        },
        { 
          path: "/my-assignments",
          element: <MyAssignments />,
        },
        { 
          path: "/submitted-assignments",
          element: <SubmittedAssignments />,
        },
        { 
          path: "/create-assignment",
          element: <CreateAssignment />,
        },
        { 
          path: "/sign-in",
          element: <SignIn />,
        },
        { 
          path: "/sign-up",
          element: <SignUp />,
        },
      ],
  },
]);

export default routes;
