import React, { useContext } from 'react';
import { BASE_URL } from './constant';
import { useFetch } from './useFetch';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const { data: coins, isLoading, isError } = useFetch(BASE_URL);

  return (
    <AppContext.Provider value={{ coins, isError, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
