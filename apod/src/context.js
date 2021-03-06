import React, { useContext } from 'react';
import { useFetch } from './useFetch';
import { BASE_URL } from './helpers';

const ApodContext = React.createContext();

export const ApodProvider = ({ children }) => {
  const { data, isLoading, isError } = useFetch(BASE_URL);

  return (
    <ApodContext.Provider value={{ data, isError, isLoading }}>
      {children}
    </ApodContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ApodContext);
};
