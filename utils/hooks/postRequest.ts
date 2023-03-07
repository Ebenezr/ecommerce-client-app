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

const useCustomPostMutation = <T extends Product | User | any>(
  url: string,
  onSuccess?: (data: T) => void
): MutationResult<T> => {
  const { data, isLoading, error, mutate } = useMutation<T, unknown, T>(
    async (data) => {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    {
      onSuccess: (data) => {
        toast.info(`Product added Successfully`, {
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

export default useCustomPostMutation;
