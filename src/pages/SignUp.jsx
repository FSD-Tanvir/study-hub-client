import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { createUser, handleUpdateProfile } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // get field values
    const name = e.target.name.value;
    const email = e.target.email.value;
    const img = e.target.img.value;
    const password = e.target.password.value;

    // validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one capital letter");
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      toast.error(
        "Password must contain at least one special character (!@#$%^&*)"
      );
      return;
    }

    // creating a new user

    createUser(email, password)
      .then(() => {
        handleUpdateProfile(name, img).then(() => {
          toast.success("User created successfully");
          navigate("/");
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md md:max-w-lg lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-blue-600 underline">
            Sign Up Now!
          </h1>
          <form onSubmit={handleSignUp} className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="img"
                className="block text-sm font-semibold text-gray-800"
              >
                Image URL
              </label>
              <input
                type=""
                name="img"
                className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            <div className="mt-6">
              <button
                className="w-full  block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Do you have an account?{" "}
            <Link
              to={"/sign-in"}
              className="font-medium text-blue-600 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
