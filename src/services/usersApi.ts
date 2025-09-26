import type { User } from "@/types/users";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://dummyjson.com/users",
});

export const updateUser = async function (newData: User) {
  try {
    const res = await axiosClient.patch(`/${newData.id}`);

    return res.data;
  } catch (error) {
    console.error("Error Updating The User:", error);
    throw error;
  }
};
