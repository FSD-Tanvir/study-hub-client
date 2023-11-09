import axios from "axios";
import useAuth from "../../hooks/useAuth";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TakeAssignment = ({ assignment }) => {
  const { user } = useAuth();
  const navigate = useNavigate()

  const handleSubmitAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const pdfLink = form.pdfLink.value;
    const quickNote = form.quickNote.value || null;
    const status = "pending";
    const examineeName = user.displayName;
    const examineeEmail = user.email;
    const marks = "not given yet";
    const feedback = "not given yet"
    const submittedAssignment = {
      pdfLink,
      quickNote,
      examineeName,
      examineeEmail,
      status,
      marks,
      feedback,
      assignment,
    };
    axios
      .post(
        "http://localhost:5000/api/v1/submitted-assignments",
        submittedAssignment
      )
      .then((data) => {
        if (data.data.insertedId) {
          toast.success("Assignment Submitted Successfully");
          navigate('/all-assignments')
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button
        className="btn block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Take Assignment
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg text-blue-600">Dear Friend!</h3>

          {/* Assignment submit form */}
          <form onSubmit={handleSubmitAssignment}>
            {/* input field for pdf link */}
            <div className="m-2">
              <label
                htmlFor="pdfLink"
                className="block text-sm font-semibold text-gray-800"
              >
                Give Your Assignment PDF Link Below:
              </label>
              <input
                type="url"
                name="pdfLink"
                placeholder="PDF URL"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            {/* quick note field */}
            <div className="m-2">
              <label
                htmlFor="quickNote"
                className="block text-sm font-semibold text-gray-800"
              >
                Give a Quick Note Here...
              </label>

              <textarea
                name="quickNote"
                rows={4}
                cols={40}
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <button
              className="block px-6 py-2 m-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-md"
              type="submit"
            >
              Submit
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

TakeAssignment.propTypes = {
  assignment: PropTypes.object,
};

export default TakeAssignment;
