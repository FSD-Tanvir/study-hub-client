import useAuth from "../hooks/useAuth";
import Table from "../components/MyAssignmentsTable";
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
        <h1 className="text-3xl font-semibold md:text-7xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default MyAssignments;
