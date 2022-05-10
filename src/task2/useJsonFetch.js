import { useState, useEffect } from 'react';

function useJsonFetch(url, opts) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, opts);
  
        if (!response.ok) {
          throw new Error(response.statusText);
        }
  
        const data = await response.json();
        setError(null);
        setData(data);
  
      } catch (error) {
        setError(error);
  
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return [data, loading, error];
}

export default useJsonFetch;