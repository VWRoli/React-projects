import React, { useContext, useState, useReducer, useEffect } from 'react';
import reducer from './reducer';
import { CLEAR_ASSETS, REMOVE_ASSET, LOADING, DISPLAY_INFO } from './constant';

import { tempData } from './tempData';
import { useFetch } from './useFetch';

const AppContext = React.createContext();
const ModalContext = React.createContext();

export const INFO_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20`;

const initialState = {
  isLoading: false,
  assets: tempData,
  coinInfo: [],
  //holdings: 0,
  //totalValue: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearAssets = () => {
    dispatch({ type: CLEAR_ASSETS });
  };

  const removeAsset = (id) => {
    dispatch({ type: REMOVE_ASSET, payload: id });
  };

  //Coin Info
  const fetchCoinInfo = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(INFO_URL);
    const coinInfo = await response.json();
    dispatch({ type: DISPLAY_INFO, payload: coinInfo });
  };
  useEffect(() => {
    fetchCoinInfo();
  }, []);

  //Modal
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider value={{ ...state, clearAssets, removeAsset }}>
      <ModalContext.Provider
        value={{ isModalOpen, setIsModalOpen, openModal, closeModal }}
      >
        {children}
      </ModalContext.Provider>
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
