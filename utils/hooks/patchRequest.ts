import { Product, User } from "@/type";
import axios from "axios";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

type MutationResult<T> = {
  data: T | undefined;
  isLoading: boolean;
  error: unknown;
  mutate: (data: T) => void;
};

const useCustomPatchMutation = <T extends Product | User | any>(
  url: string
): MutationResult<T> => {
  const { data, isLoading, error, mutate } = useMutation<T, unknown, T>(
    async (data) => {
      const response = await axios.patch(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    {
      onSuccess: (data) => {
        toast.info(`Product Saved Successfully`, {
          position: "bottom-left",
        });
      },
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
