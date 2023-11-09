import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Result = ({ myAssignment }) => {
  const [show, setShow] = useState(true);
  const [marks, setMarks] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const handleResult = () => {
    // eslint-disable-next-line react/prop-types
    const { marks, feedback } = myAssignment;
    setMarks(marks);
    setFeedback(feedback);
    setShow(!show)
  };

  console.log(marks, feedback);

  return (
    <div>
      <button
        className="btn block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
        onClick={() => {
          handleResult();
          document.getElementById("my_modal_4").showModal();
        }}
      >
        Result
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg text-blue-600 mb-4">
            Here is Your Assignment Result ...
          </h3>
          <div className="m-2 text-gray-800 font-normal">
            <p className=" mb-4">
              <span className=" text-sm font-semibold  text-gray-800">
                Your Obtain Marks : {marks && marks}
              </span>{" "}
            </p>
            <p className="mb-4">
              <span className=" text-sm font-semibold  text-gray-800">
                Your Assignment Feedback: {feedback && feedback}
              </span>{" "}
            </p>
          </div>
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

export default Result;
