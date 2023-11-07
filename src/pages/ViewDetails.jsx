import axios from "axios";
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import TakeAssignment from "../components/modals/TakeAssignment";

const ViewDetails = () => {
  const assignment = useLoaderData();
  const navigate = useNavigate();
  const { user } = useAuth();
  const userEmail = user.email;
  const { _id, title, image, description, dueDate, difficulty, marks } =
    assignment || {};

  const handleDelete = (_id) => {
    axios
      .delete(`http://localhost:5000/api/v1/all-assignments/${_id}`, {
        data: { userEmail }, // Use a data property to pass the email
      })
      .then((response) => {
        if (response.data.deletedCount > 0) {
          toast.success(" Deleted Successfully");
          navigate("/all-assignments");
        }
      })
      .catch((error) => {
        toast.error("Error:", error);
      });
  };

  return (
    <div className="hero block mt-16">
      <div className="hero-content flex-col md:flex-row-reverse">
        <img
          src={image}
          className="max-w-sm w-64 sm:w-full mx-auto  rounded-lg  md:h-96 object-cover"
        />
        <div>
          <div>
            <h1 className="text-3xl font-semibold  text-blue-600 ">{title}</h1>
            <p className="py-6">{description}</p>
          </div>

          <div className="flex justify-between my-5">
            <span>Difficulty Level: {difficulty}</span>
            <span>Marks: {marks}</span>
          </div>

          <div className="flex items-center justify-between">
            <TakeAssignment assignment={assignment} />
            <span className="font-semibold">
              Due Date: {new Date(dueDate).toString().slice(3, 15)}
            </span>
          </div>
        </div>
      </div>

      {/* if i want show delete button conditionally */}

      {/* <div>
        {userEmail === email ? (
          <div className="text-center my-10">
            <Link>
              <button
                className=" px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-red-600 hover:bg-red-700  rounded-xl "
                type="submit"
              >
                Delete This Assignment
              </button>
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div> */}

      <div className="text-center my-10">
        <Link>
          <button
            className=" px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-red-600 hover:bg-red-700  rounded-xl "
            type="submit"
            onClick={() => handleDelete(_id)}
          >
            Delete This Assignment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewDetails;
