import { Product, User } from "@/type";
import axios from "axios";
import { useMutation } from "react-query";

type MutationResult<T> = {
  data: T | undefined;
  isLoading: boolean;
  error: unknown;
  mutate: (data: T) => void;
};

const useCustomPostMutation = <T extends Product | User>(
  url: string
): MutationResult<T> => {
  const { data, isLoading, error, mutate } = useMutation<T, unknown, T>(
    async (data) => {
      const response = await axios.post(url, data);
      return response.data;
    }
  );

  return {
    data,
    isLoading,
    error,
    mutate, // expose the mutate method to trigger the post request with data
  };
};

export default useCustomPostMutation;
