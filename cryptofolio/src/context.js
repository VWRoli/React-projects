import React, { useContext, useState, useReducer } from 'react';
import { BASE_URL } from './constant';
import { useFetch } from './useFetch';
import reducer from './reducer';
import { CLEAR_ASSETS, REMOVE_ASSET } from './constant';

import { tempData } from './tempData';

const AppContext = React.createContext();

const initialState = {
  isLoading: false,
  assets: tempData,
  holdings: 0,
  totalValue: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearAssets = () => {
    dispatch({ type: CLEAR_ASSETS });
  };

  const removeAsset = (id) => {
    dispatch({ type: REMOVE_ASSET, payload: id });
  };

  return (
    <AppContext.Provider value={{ ...state, clearAssets, removeAsset }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
