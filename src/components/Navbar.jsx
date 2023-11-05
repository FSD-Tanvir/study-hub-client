import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-2xl font-bold">
            <span className="text-blue-700">Study</span>
            <span className="text-blue-500">Hub</span>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {/* for active route text-blue-600 font-bold */}
              <Link to={"/"}>
                <li className="text-sm font-semibold text-gray-400 hover:text-blue-600 ">
                  Home
                </li>
              </Link>
              <Link to={"/all-assignments"}>
                <li className="text-sm font-semibold text-gray-400 hover:text-blue-600 ml-3">
                  All Assignments
                </li>
              </Link>
              <Link to={"/my-assignments"}>
                <li className="text-sm font-semibold text-gray-400 hover:text-blue-600 ml-3">
                  My Assignments
                </li>
              </Link>
              <Link to={"/submitted-assignments"}>
                <li className="text-sm font-semibold text-gray-400 hover:text-blue-600 ml-3">
                  Submitted Assignments
                </li>
              </Link>
              <Link to={"/create-assignment"}>
                <li className="text-sm font-semibold text-gray-400 hover:text-blue-600 ml-3">
                  Create Assignment
                </li>
              </Link>
            </ul>
          </div>
          <div>
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-neutral"
                >
                  <li>
                    <button className="btn btn-sm  btn-ghost">
                      {user.displayName}
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-sm  btn-ghost" onClick={logOut}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to={"/sign-in"}>
                <button className="btn-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                  Sign in
                </button>
              </Link>
            )}
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200">
          <ul>
            {/* Sidebar content here */}
            <Link to={"/"}>
              <li className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded mb-1">
                Home
              </li>
            </Link>
            <Link to={"/all-assignments"}>
              <li className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded mb-1">
                All Assignments
              </li>
            </Link>
            <Link to={"/my-assignments"}>
              <li className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded mb-1">
                My Assignments
              </li>
            </Link>
            <Link to={"/submitted-assignments"}>
              <li className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded mb-1">
                Submitted Assignments
              </li>
            </Link>
            <Link to={"/create-assignment"}>
              <li className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded mb-1">
                Create Assignment
              </li>
            </Link>
          </ul>
          <div className="mt-auto">
            <div className="pt-6 w-full">
              <Link to={"/sign-in"}>
                <button className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-xl w-full">
                  Sign in
                </button>
              </Link>
              <Link to={"/sign-up"}>
                <button className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl w-full">
                  Sign Up
                </button>
              </Link>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © StudyHub</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
