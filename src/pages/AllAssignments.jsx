import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const AllAssignments = () => {
  const allAssignments = useLoaderData([]);

  return (
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ">
      <h1 className="text-3xl font-semibold text-center text-blue-600 ">
        Take Your Assignment Which You Want !!!
      </h1>
      <div className="grid md:grid-cols-2 gap-2">
        {allAssignments.map((assignment) => {
          return <Card key={assignment._id} assignment={assignment} />;
        })}
      </div>
    </div>
  );
};
export default AllAssignments;
