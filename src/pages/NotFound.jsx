import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-[180px] font-semibold">404</h1>

      <h2 className="text-5xl font-bold t">NOT FOUND</h2>

      <NavLink to={"/"}>
        <button className="btn px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl mt-10">
          BACK TO HOME
        </button>
      </NavLink>
    </div>
  );
};

export default NotFound;
