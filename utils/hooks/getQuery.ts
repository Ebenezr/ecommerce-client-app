import axios from "axios";
import { useQuery, QueryOptions } from "react-query";

type QueryResult<T> = {
  data: T | undefined;
  isLoading: boolean;
  error: unknown;
  fetchResults: () => Promise<void>;
};

const useCustomQuery = <T>(
  url: string,
  options?: QueryOptions<T, unknown>
): QueryResult<T> => {
  const queryKey = url;

  const { data, isLoading, error, refetch } = useQuery<T, unknown>(
    queryKey,
    async () => {
      const response = await axios.get(url);
      return response.data;
    },
    options
  );

  const fetchResults = async () => {
    try {
      await refetch(); // manually trigger the refetch method to fetch data
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return {
    data,
    isLoading,
    error,
    fetchResults,
  };
};

export default useCustomQuery;
