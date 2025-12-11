import { useQuery, useMutation } from "convex/react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

type QueryFunction = (...args: any[]) => any;

export const useConvexQuery = (
  query: QueryFunction,
  args?: Parameters<typeof useQuery>[1]
) => {
  const result = useQuery(query as any, args);
  const [data, setData] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Use effect to handle the state changes based on the query result
  useEffect(() => {
    if (result === undefined) {
      setIsLoading(true);
    } else {
      try {
        setData(result);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
          toast.error(err.message);
        } else {
          const unknownError = new Error(String(err));
          setError(unknownError);
          toast.error(unknownError.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
  }, [result]);

  return {
    data,
    isLoading,
    error,
  };
};

export const useConvexMutation = <M extends (...args: any[]) => Promise<any>>(mutation: M) => {
  const mutationFn = useMutation(mutation as any);
  const [data, setData] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const mutate = async (...args: Parameters<M>) => {
    setIsLoading(true);
    setError(null);

    try {
      // Ensure only one argument is sent to mutationFn, per the lint error
      const response = await mutationFn(args[0]);
      setData(response);
      return response;
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
        toast.error(err.message);
        throw err;
      } else {
        const unknownError = new Error(String(err));
        setError(unknownError);
        toast.error(unknownError.message);
        throw unknownError;
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { mutate, data, isLoading, error };
};