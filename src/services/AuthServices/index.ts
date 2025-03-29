"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);
    console.log(data);
    if (data?.success) {
      (await cookies()).set("accessToken", data?.data?.accessToken);
      (await cookies()).set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await axiosInstance.post("/auth/login", userData);
    return res.data;
  } catch (e: any) {
    throw new Error(e);
  }
};
