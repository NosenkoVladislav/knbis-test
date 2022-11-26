import { useEffect, useState, useRef, useCallback } from "react";

type UseFetchReturnType<T> = {
  payload: T | null;
  error: UseFetchErrorType | null;
  status: string | null;
  loading: boolean;
};

type UseFetchErrorType = {
  message: string;
};

export const useFetch = <T>(apiCall: any): UseFetchReturnType<T> => {
  const componentIsMounted = useRef(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleFetch = useCallback(async () => {
    const [data, error, status] = await apiCall();

    setLoading(true);
    setError(null);

    if (componentIsMounted.current && error) {
      setError(error);
      setStatus(status);
      setLoading(false);
    } else if (componentIsMounted.current) {
      setData(data?.data);
      setStatus(status);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [apiCall]);

  useEffect(() => {
    componentIsMounted.current = true;
    handleFetch();
  }, [handleFetch]);

  return {
    payload: data,
    error,
    status,
    loading,
  };
};
