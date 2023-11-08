import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ assignment }) => {
  const { _id, title, image, difficulty, marks } = assignment || {};

  return (
    <div>
      <div className="px-1 py-5 mx-auto lg:py-16 lg:px-12 flex flex-col">
        <img
          className="rounded-lg h-56 object-cover"
          src={image}
          alt="image"
        />

        <div className="px-2">
          <h1 className="mt-2 text-2xl font-bold text-gray-900 leading-tight sm:mt-3 sm:text-3xl xl:text-4xl">
            <span className="text-indigo-500">{title}</span>
          </h1>

          <div className="mt-1 sm:mt-2">
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">
                Difficulty Level: {difficulty}
              </p>
              <p className="text-sm text-gray-500">Marks: {marks}</p>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 flex justify-between ">
            <Link to={`/view-details/${_id}`}>
              <button
                className="  block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                type="submit"
              >
                View Details
              </button>
            </Link>
            <Link to={`/Update/${_id}`}>
            <button
              className="  block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
              type="submit"
            >
              Update Here
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  assignment: PropTypes.object,
};

export default Card;
