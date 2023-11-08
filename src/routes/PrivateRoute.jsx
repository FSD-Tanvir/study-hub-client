import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // we have to wait here
  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl font-semibold md:text-7xl">
          <span className="loading loading-spinner text-info"></span>
        </h1>
      </div>
    );
  //

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
