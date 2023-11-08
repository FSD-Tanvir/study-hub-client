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
            <th>Mark</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {/* rows*/}
          {myAssignments.map((myAssignment) => {
            const { assignment, status, marks } = myAssignment;
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
                <td>{marks}</td>
                <th>
                  <button className="btn">Result</button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

MyAssignmentsTable.propTypes = {
  data: PropTypes.object,
};

export default MyAssignmentsTable;
