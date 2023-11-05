import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Outlet />
        <Toaster />
      </div>
    </>
  );
};

export default Root;
