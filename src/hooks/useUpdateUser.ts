import { loggedUser } from "@/components/signIn/loginSlice";
import { updateUser } from "@/services/usersApi";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import type { User } from "@/types/users";
import { useMutation } from "@tanstack/react-query";

export const useUpdateUser = function () {
  const dispatch = useAppDispatch();
  const oldUserData = useAppSelector((s) => s.login.user);
  const id = useAppSelector((s) => s.login.user?.id);
  return useMutation({
    mutationKey: ["update"],
    mutationFn: (newData: User) => updateUser(newData, id),
    onError: (error) => {
      console.error("Update Failed", error);
    },
    onSuccess: (updateUser) => {
      dispatch(loggedUser({ ...oldUserData, ...updateUser }));
    },
  });
};
