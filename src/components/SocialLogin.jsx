import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();
  const navigate = useNavigate();

  const socialLogin = (media) => {
    media()
      .then(() => {
        toast.success("User logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="divider font-medium">continue with</div>
      <div className=" flex justify-around">
        <button
          onClick={() => socialLogin(googleLogin)}
          className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
        >
          Google
        </button>
        <button
          onClick={() => socialLogin(githubLogin)}
          className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
        >
          Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
