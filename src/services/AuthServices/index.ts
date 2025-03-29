"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { TLoggedInUser } from "@/src/types/auth";
import { jwtDecode } from "jwt-decode";
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
    const { data } = await axiosInstance.post("/auth/login", userData);
    if (data?.success) {
      (await cookies()).set("accessToken", data?.data?.accessToken);
      (await cookies()).set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};
export const logout = async () => {
  (await cookies()).delete("accessToken");
  (await cookies()).delete("refreshToken");
};
export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  let decoded = null;
  if (accessToken) {
    try {
      decoded = (await jwtDecode(accessToken)) as TLoggedInUser;

      return {
        _id: decoded,
        name: decoded.name,
        email: decoded.email,
        mobileNumber: decoded.mobileNumber,
        role: decoded.role,
        status: decoded.status,
        iat: decoded.iat,
        exp: decoded.exp,
      };
    } catch (error) {
      console.error("Error decoding JWT:", error);
    }
    return null;
  }
};
