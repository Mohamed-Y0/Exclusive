import { useMutation } from "@tanstack/react-query";
import * as authApi from "@/services/authApi";
import { loggedUser } from "@/components/signIn/loginSlice";
import { useAppDispatch } from "@/store/hooks";

export function useLogin() {
  const dispatch = useAppDispatch();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => authApi.login(username, password),
    onError: (error) => {
      console.error("Login failed:", error.message);
    },
    onSuccess: (data) => {
      dispatch(loggedUser(data));
      console.log("Login success", data);
    },
    retry: false,
  });
}
