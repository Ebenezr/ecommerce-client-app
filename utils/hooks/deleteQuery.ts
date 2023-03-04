import axios from "axios";
import { useMutation, UseMutateFunction } from "react-query";

type MutationResult = {
  isLoading: boolean;
  error: unknown;
  mutate: UseMutateFunction<void, unknown, string, unknown>;
};

const useCustomDestroyMutation = (url: string): MutationResult => {
  const { isLoading, error, mutate } = useMutation<void, unknown, string>(
    async (id) => {
      await axios.delete(`${url}/${id}`);
    }
  );

  return {
    isLoading,
    error,
    mutate, // expose the mutate method to trigger the delete request
  };
};

export default useCustomDestroyMutation;
