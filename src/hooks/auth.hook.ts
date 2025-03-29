import { FieldValues } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../services/AuthServices";
import { toast } from "sonner";


export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["User_Registration"],
    mutationFn: async (userInfo) => {
      return await registerUser(userInfo);
    },
    onSuccess: () => {
      toast.success("User registered successfully!");
    },
    onError: (error) => {
      toast.error("Failed to register user: " + error.message);
    },
  });
};
export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["User_Registration"],
    mutationFn: async (userInfo) => {
      return await loginUser(userInfo);
    },
    onSuccess: () => {
      toast.success("User logged in successfully!");
    },
    onError: (error) => {
      toast.error("Failed to login user: " + error.message);
    },
  });
};
