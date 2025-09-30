import DisplayData from "@/components/dashboard/DisplayData";
import SearchBar from "@/components/dashboard/SearchBar";
import Error from "@/components/ui/Error";
import useUsers from "@/hooks/useUsers";

function ManageUsers() {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <p>Loading Losers</p>;
  if (error) return <Error err={error} />;

  console.log(users);
  return (
    <div className={`container m-auto px-5 sm:px-0`}>
      <SearchBar />
      <DisplayData data={users ?? []} />
    </div>
  );
}

export default ManageUsers;
