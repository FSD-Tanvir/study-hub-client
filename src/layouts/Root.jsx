import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Outlet />
        <Footer/>
        <Toaster />
      </div>
    </>
  );
};

export default Root;
