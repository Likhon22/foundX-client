import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/Categories";

export const useCategories = () => {
  return useQuery({
    queryKey: ["get-categories"],
    queryFn: async () => getCategories(),
  });
};
