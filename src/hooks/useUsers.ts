import { getUsers } from "@/services/usersApi";
import { useQuery } from "@tanstack/react-query";

function useUsers() {
  return useQuery({
    queryKey: ["getUsers"],
    queryFn: getUsers,
  });
}

export default useUsers;
