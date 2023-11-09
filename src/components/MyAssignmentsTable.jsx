import PropTypes from "prop-types";
const MyAssignmentsTable = ({ data }) => {
  const myAssignments = data;
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Marks</th>
            <th>Your Obtain Marks</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {/* rows*/}
          {myAssignments.map((myAssignment) => {
            const { assignment, status, marks, feedback } = myAssignment;
            return (
              <tr key={myAssignment._id}>
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
                <td className="font-bold text-gray-600 capitalize">{status}</td>
                <td>{assignment.marks}</td>
                <td>{marks}</td>
                <td>
                  <div className="max-w-xs flex flex-wrap items-center ">
                    {feedback}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

MyAssignmentsTable.propTypes = {
  data: PropTypes.array,
};

export default MyAssignmentsTable;
