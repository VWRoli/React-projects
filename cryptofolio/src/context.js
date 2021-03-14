import React, {
  useContext,
  useState,
  useReducer,
  useEffect,
  useCallback,
} from 'react';

import reducer from './reducer';

import {
  CLEAR_ASSETS,
  REMOVE_ASSET,
  LOADING,
  DISPLAY_INFO,
  GET_TOTALS,
  GET_TOTAL_CHANGE,
} from './constant';

import { urlFormatter } from './helpers';

import { tempData } from './tempData';

const AppContext = React.createContext();
const ModalContext = React.createContext();

export const INFO_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=`;

const initialState = {
  isLoading: false,
  assets: tempData,
  coinInfo: [],
  totalValue: 0,
  totalValueChange: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearAssets = () => {
    dispatch({ type: CLEAR_ASSETS });
  };

  const removeAsset = (id) => {
    dispatch({ type: REMOVE_ASSET, payload: id });
  };

  //Get Coin Info
  const fetchCoinInfo = useCallback(async () => {
    dispatch({ type: LOADING });
    const formattedUrl = urlFormatter(INFO_URL, state.assets);

    const response = await fetch(`${formattedUrl}`);
    const coinInfo = await response.json();
    dispatch({ type: DISPLAY_INFO, payload: coinInfo });
    //Get total asset values
    dispatch({ type: GET_TOTALS });
    //Get total value change
    dispatch({ type: GET_TOTAL_CHANGE });
  }, [state.assets]);
  useEffect(() => {
    fetchCoinInfo();
  }, [fetchCoinInfo]);

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
