import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const assignment = useLoaderData();
  const { title, image, description, dueDate, difficulty,marks } = assignment || {};
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse">
        <img
          src={image}
          className="max-w-sm w-64 sm:w-full mx-auto  rounded-lg  md:h-96 object-cover"
        />
        <div>
          <div >
            <h1 className="text-3xl font-semibold  text-blue-600 ">{title}</h1>
            <p className="py-6">{description}</p>
          </div>

          <div className="flex justify-between my-5">
            <span>Difficulty Level:  {difficulty}</span>
            <span>Marks:  {marks}</span>
          </div>

          <div className="flex items-center justify-between">
            <Link>
              <button
                className="  block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                type="submit"
              >
                Take Assignment
              </button>
            </Link>
            <span className="font-semibold">
              Due Date: {new Date(dueDate).toString().slice(3, 15)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
