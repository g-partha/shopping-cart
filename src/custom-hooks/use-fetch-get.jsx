import { useEffect, useState } from "react";
const useFetchGetData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setError(null);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(url, { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => setData(result))
      .catch((errorCaught) => {
        if (errorCaught.name !== "AbortError") {
          setError(errorCaught.message);
        }
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [url]);
  return { data, error, loading };
};

export default useFetchGetData;
