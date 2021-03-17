import React, { useContext, useReducer, useEffect, useCallback } from 'react';

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
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_ACTIVE_COIN,
  ADD_ASSET,
  OPEN_SUCCESS,
  CLOSE_SUCCESS,
  SET_QUERY,
  SET_ERROR,
} from './constant';

import { urlFormatter, chartDataFormatter } from './helpers';

const AppContext = React.createContext();

const initialState = {
  isLoading: false,
  isError: false,
  isModalOpen: false,
  assets: [],
  coinInfo: [],
  totalValue: 0,
  totalValueChange: 0,
  chartData: [],
  activeCoin: '',
  displaySuccess: false,
  searchQuery: '',
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearAssets = () => {
    dispatch({ type: CLEAR_ASSETS });
  };

  const removeAsset = (id) => {
    dispatch({ type: REMOVE_ASSET, payload: id });
  };

  //Open and close modal
  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  //Set active coin
  const setActiveCoin = (id) => {
    dispatch({ type: SET_ACTIVE_COIN, payload: id });
  };
  //Add asset
  const addAsset = (asset) => {
    dispatch({ type: ADD_ASSET, payload: asset });
  };

  //Set success message after adding asset
  const openSuccess = () => {
    dispatch({ type: OPEN_SUCCESS });
  };
  const closeSuccess = () => {
    dispatch({ type: CLOSE_SUCCESS });
  };

  //Search Query
  const setSearchQuery = (query) => {
    dispatch({ type: SET_QUERY, payload: query });
  };

  const setIsError = () => {
    dispatch({ type: SET_ERROR });
  };

  //Get Coin Info
  const fetchCoinInfo = useCallback(async () => {
    try {
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
      dispatch({
        type: SET_CHART_DATA,
        payload: chartDataFormatter(chartData, state.assets),
      });

      //Get total asset values
      dispatch({ type: GET_TOTALS });

      //Get total value change
      dispatch({ type: GET_TOTAL_CHANGE });
    } catch (error) {
      setIsError();
    }
  }, [state.assets]);
  useEffect(() => {
    fetchCoinInfo();
  }, [state.assets, fetchCoinInfo]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearAssets,
        removeAsset,
        openModal,
        closeModal,
        setActiveCoin,
        addAsset,
        openSuccess,
        closeSuccess,
        setSearchQuery,
        setIsError,
        fetchCoinInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
