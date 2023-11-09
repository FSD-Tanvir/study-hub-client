import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const SubmittedAssignmentsTable = ({ data }) => {
  const submittedAssignments = data;
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Title</th>
            <th>Examinee</th>
            <th>Marks</th>
            <th>Give Mark</th>
          </tr>
        </thead>
        <tbody>
          {/* rows*/}
          {submittedAssignments.map((submittedAssignment) => {
            const { assignment, examineeName, } = submittedAssignment;
            return (
              <tr key={submittedAssignment._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={assignment.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{assignment.title}</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold text-gray-600 capitalize">
                  {examineeName}
                </td>
                <td>{assignment.marks}</td>
                <td>
                  <Link to={`/give-mark/${submittedAssignment._id}`}>
                  <button  className="btn block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl">
                    Give Mark
                  </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

SubmittedAssignmentsTable.propTypes = {
  data: PropTypes.array,
};

export default SubmittedAssignmentsTable;
