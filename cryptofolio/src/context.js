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
  SET_CHART_DATA,
  INFO_URL,
} from './constant';

import { urlFormatter, chartDataFormatter } from './helpers';

import { tempData } from './tempData';

const AppContext = React.createContext();
const ModalContext = React.createContext();

const initialState = {
  isLoading: false,
  assets: tempData,
  coinInfo: [],
  totalValue: 0,
  totalValueChange: 0,
  chartData: [],
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

    //Get API urls for chart
    const chartUrls = state.assets.map(
      (item) =>
        `https://api.coingecko.com/api/v3/coins/${item.id}/market_chart?vs_currency=usd&days=7`
    );
    //Fetch chart data
    const chartRes = await Promise.all(
      chartUrls.map((url) => fetch(url).catch((error) => error))
    );
    const chartData = await Promise.all(
      chartRes.map((response) =>
        response.json ? response.json().catch((error) => error) : response
      )
    );
    // Set chart data
    dispatch({ type: SET_CHART_DATA, payload: chartDataFormatter(chartData) });

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
