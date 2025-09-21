import axios from "axios";

const authClient = axios.create({
  baseURL: "https://dummyjson.com/auth",
});

const userClient = axios.create({
  baseURL: "https://dummyjson.com/auth/me",
});

export type LoginCredentials = {
  username: string;
  password: string;
};

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export async function login(
  username: string,
  password: string,
): Promise<LoginResponse> {
  try {
    const res = await authClient.post(
      "/login",
      { username, password },
      {
        headers: { "Content-Type": "application/json" },
      },
    );

    return auth((res.data as LoginResponse).accessToken);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const status = error.response.status;
        const msg = error.response.data?.message;

        if (status === 400 && msg === "Invalid credentials") {
          throw new Error("Incorrect username or password");
        }

        throw new Error(msg || "Unexpected error");
      } else if (error.request) {
        throw new Error("Failed to connect to server");
      } else {
        throw new Error("Unexpected error");
      }
    }

    throw error;
  }
}

async function auth(token: string) {
  try {
    const user = await userClient.get("", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return user.data;
  } catch (error) {
    if (axios.isAxiosError(error)) throw new Error(error.message);
  }
}
