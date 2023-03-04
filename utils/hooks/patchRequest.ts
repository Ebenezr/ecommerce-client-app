import { Product, User } from "@/type";
import axios from "axios";
import { useMutation } from "react-query";

type MutationResult<T> = {
  data: T | undefined;
  isLoading: boolean;
  error: unknown;
  mutate: (data: T) => void;
};

const useCustomPatchMutation = <T extends Product | User>(
  url: string
): MutationResult<T> => {
  const { data, isLoading, error, mutate } = useMutation<T, unknown, T>(
    async (data) => {
      const response = await axios.patch(url, data);
      return response.data;
    }
  );

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};

export default useCustomPatchMutation;
