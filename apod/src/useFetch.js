import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  //Loading state
  const [isLoading, setIsLoading] = useState(true);
  //Error state
  const [isError, setIsError] = useState(false);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      //Disable loading screen
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};
