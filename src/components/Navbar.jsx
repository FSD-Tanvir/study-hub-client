const Navbar = () => {
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
              <li>
                <a
                  className="text-sm font-semibold text-gray-400 hover:text-blue-600"
                  href="#"
                >
                  Home{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-sm font-semibold text-gray-400 hover:text-blue-600"
                  href="#"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  className="text-sm font-semibold text-gray-400 hover:text-blue-600"
                  href="#"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  className="text-sm font-semibold text-gray-400 hover:text-blue-600"
                  href="#"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  className="text-sm font-semibold text-gray-400 hover:text-blue-600"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="sm:navbar-end">
          {user?.email ? (
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
            <Link to="/login">
              <button className="btn btn-outline btn-error btn-sm lg:btn-md font-medium lg:text-xl ">
                Login
              </button>
            </Link>
          )}
        </div> */}
          <div>
            <button className="btn-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md">
              Sign in
            </button>
          </div>
        </div>
        {/* Page content here */}
        Content
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
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                href="#"
              >
                About Us
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                href="#"
              >
                Services
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="mt-auto">
            <div className="pt-6 w-full">
              <a
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-xl"
                href="#"
              >
                Sign in
              </a>
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                href="#"
              >
                Sign Up
              </a>
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
