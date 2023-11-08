import useAuth from "../hooks/useAuth";
import MyAssignmentsTable from "../components/MyAssignmentsTable";
import { useQuery } from "react-query";

const MyAssignments = () => {
  const { user } = useAuth();
  const userEmail = user.email;
  const { data, isLoading } = useQuery({
    queryKey: [userEmail],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/api/v1/my-assignments/?userEmail=${userEmail}`
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
        Here is Your All Assignments Which You Submitted
      </h1>
      <MyAssignmentsTable data={data} />
    </div>
  );
};

export default MyAssignments;
