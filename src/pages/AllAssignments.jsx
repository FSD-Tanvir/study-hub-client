import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";

const AllAssignments = () => {
  const allData = useLoaderData([]);
  const [allAssignments, setAllAssignments] = useState(allData);

  const handleFilter = (e) => {
    e.preventDefault();
    const form = e.target;
    const difficulty = form.difficulty.value;
    const result = allData.filter(
      (assignment) => assignment.difficulty === difficulty
    );
    setAllAssignments(result);
  };

  return (
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ">
      <h1 className="text-3xl font-semibold text-center text-blue-600 ">
        Take Your Assignment Which You Want !!!
      </h1>

      <form
        onSubmit={handleFilter}
        className="border-b border-gray-300 flex flex-col sm:flex-row justify-center items-center my-5"
      >
        <div className=" flex items-center justify-center">
          <label htmlFor="difficulty">Filter By Difficulty Level: </label>
          <select
            id="difficulty"
            name="difficulty"
            className="  px-4 py-2 m-2 bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
            required
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button
          className="  block px-4 py-2 m-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-sm"
          type="submit"
        >
          Search
        </button>
      </form>

      <div className="grid md:grid-cols-2 gap-2">
        {allAssignments.map((assignment) => {
          return <Card key={assignment._id} assignment={assignment} />;
        })}
      </div>
    </div>
  );
};
export default AllAssignments;
