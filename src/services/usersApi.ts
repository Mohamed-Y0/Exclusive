import type { User } from "@/types/users";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://dummyjson.com/users",
});

export const getUsers = async function () {
  try {
    const res = await axiosClient.get("");
    console.log(res);

    return res.data;
  } catch (error) {
    console.error("Error While Fetching Users:", error);
    throw error;
  }
};

export const updateUser = async function (newData: Partial<User>, id?: number) {
  try {
    const res = await axiosClient.patch(`/${id}`, newData);

    return res.data;
  } catch (error) {
    console.error("Error Updating The User:", error);
    throw error;
  }
};
