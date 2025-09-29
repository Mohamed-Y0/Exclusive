import Error from "@/components/ui/Error";
import useUsers from "@/hooks/useUsers";

function ManageUsers() {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <p>Loading Losers</p>;
  if (error) return <Error err={error} />;

  console.log(data);
  return <div>Hello Losers</div>;
}

export default ManageUsers;
