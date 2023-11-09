import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const CreateAssignment = () => {
  const [dueDate, setDueDate] = useState(null);
  const { user } = useAuth();

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value || null;
    const image = form.image.value || null;
    const description = form.description.value || null;
    const difficulty = form.difficulty.value || null;
    const marks = form.marks.value || null;
    const email = user.email;

    const assignment = {
      title,
      image,
      description,
      difficulty,
      marks,
      dueDate,
      email,
    };
    axios
      .post("https://studyhub-server.vercel.app/api/v1/all-assignments", assignment)
      .then((data) => {
        if (data.data.insertedId) {
          toast.success("Assignment Created Successfully");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md md:max-w-xl lg:max-w-3xl">
      <h1 className="text-3xl font-semibold text-center text-blue-600 underline ">
        Create an Assignment
      </h1>
      <form onSubmit={handleCreateAssignment} className="form-control">
        {/* title field */}
        <div className="mb-2">
          <label
            htmlFor="title"
            className="block text-sm font-semibold text-gray-800"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
            required
          />
        </div>

        {/* Image field */}
        <div className="mb-2">
          <label
            htmlFor="image"
            className="block text-sm font-semibold text-gray-800"
          >
            Image
          </label>
          <input
            type="url"
            name="image"
            placeholder="Image URL"
            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
            required
          />
        </div>

        {/* description field */}
        <div className="mb-2 my-5">
          <label
            htmlFor="description"
            className="block text-sm font-semibold text-gray-800"
          >
            Description
          </label>

          <textarea
            name="description"
            rows={4}
            cols={40}
            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          {/* difficulty field */}
          <div>
            <label htmlFor="difficulty">Difficulty Level: </label>
            <select
              id="difficulty"
              name="difficulty"
              className="  px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
              required
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          {/* mark field */}
          <div>
            <label htmlFor="marks">Marks: </label>
            <select
              id="marks"
              name="marks"
              className=" px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
              required
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          {/* date field */}
          <div>
            <label htmlFor="date">Due Date: </label>
            <DatePicker
              selected={dueDate}
              onChange={(date) => setDueDate(date)}
              dateFormat={"dd-MM-yyyy"}
              minDate={new Date()}
              className="w-[180px] px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            className="w-full  block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAssignment;
