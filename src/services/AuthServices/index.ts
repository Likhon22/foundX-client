"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await axiosInstance.post("/auth/register", userData);
    return res.data;
  } catch (e: any) {
    throw new Error(e);
  }
};
