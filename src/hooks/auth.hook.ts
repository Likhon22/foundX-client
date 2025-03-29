import { FieldValues } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/AuthServices";
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
      toast.error(error.message);
    },
  });
};
