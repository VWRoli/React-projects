import { useState, useEffect } from 'react';

export const useFetchBooks = (url) => {
  //Loading state
  const [isListLoading, setIsListLoading] = useState(true);
  //Error state
  const [isListError, setIsListError] = useState(false);

  const [booksData, setBooksData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setBooksData(data);
      //Disable loading screen
      setIsListLoading(false);
    } catch (error) {
      setIsListLoading(false);
      setIsListError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { booksData, isListLoading, isListError };
};
