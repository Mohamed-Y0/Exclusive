import { useMutation } from "@tanstack/react-query";
import * as authApi from "@/services/authApi";

export function useLogin() {
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
      console.log("Login success", data);
    },
    retry: false,
  });
}
