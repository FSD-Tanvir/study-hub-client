import { useQuery } from "react-query";
import useAuth from "../hooks/useAuth";
import SubmittedAssignmentsTable from "../components/SubmittedAssignmentsTable";

const SubmittedAssignments = () => {
  const { user } = useAuth();
  const userEmail = user.email;
  const { data, isLoading } = useQuery({
    queryKey: [userEmail],
    queryFn: async () => {
      const response = await fetch(
        `https://studyhub-server.vercel.app/api/v1/submitted-assignments/?userEmail=${userEmail}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl font-semibold md:text-7xl">
          <span className="loading loading-spinner text-info"></span>
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md min-h-screen">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-3">
        Here is Your Assignments Which Examinee Submitted
      </h1>
      <SubmittedAssignmentsTable data={data} />
    </div>
  );
};

export default SubmittedAssignments;
