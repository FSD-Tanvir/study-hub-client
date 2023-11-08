import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import toast from "react-hot-toast";
const GiveMark = ({ submittedAssignment }) => {
  const [pdfLink, setPdfLink] = useState(null);
  const [quickNote, setQuickNote] = useState(null);

  const handleGiveMark = () => {
    setPdfLink(submittedAssignment.pdfLink);
    setQuickNote(submittedAssignment.quickNote);
  };

  const handleMarked = (e) => {
    e.preventDefault();
    const form = e.target;
    const status = "completed";
    const marks = form.marks.value;
    const feedback = form.feedback.value;
    const markedAssignment = {
      status,
      marks,
      feedback,
    };
    axios
      .put(
        `http://localhost:5000/api/v1/submitted-assignments/${submittedAssignment._id}`,
        markedAssignment
      )
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          toast.success("Marked Successfully");
        }
      })
      .catch((error) => {
        toast.error("Error:", error);
      });
  };

  return (
    <div>
      <button
        className="btn block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
        onClick={() => {
          handleGiveMark();
          document.getElementById("my_modal_4").showModal();
        }}
      >
        Give Mark
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg text-blue-600">
            Check Assignment and Give Mark here...
          </h3>
          <div className="m-2 text-gray-800 font-normal">
            <p className=" mb-4">
              <span className=" text-sm font-semibold  text-gray-800">
                PDF Link:
              </span>{" "}
              {pdfLink}
            </p>
            <p className="mb-4">
              <span className=" text-sm font-semibold  text-gray-800">
                Note Given by Examinee:
              </span>{" "}
              {quickNote}
            </p>
          </div>
          <form onSubmit={handleMarked}>
            {/* feedback field */}
            <div className="m-2">
              <label
                htmlFor="feedback"
                className="block text-sm font-semibold  text-gray-800"
              >
                Give Assignment Feedback Here...
              </label>

              <textarea
                name="feedback"
                rows={4}
                cols={40}
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40 font-normal text-black"
              />
            </div>

            {/* marks field  */}
            <div className="m-2">
              <label
                htmlFor="marks"
                className="block text-sm font-semibold text-gray-800"
              >
                Give Marks This Assignment:
              </label>
              <input
                type="number"
                name="marks"
                className="block  px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40 font-normal text-black"
                required
              />
            </div>

            <button
              className="block px-6 py-2 m-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-md"
              type="submit"
            >
              Marked
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">X</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

GiveMark.propTypes = {
  submittedAssignment: PropTypes.object,
};

export default GiveMark;
