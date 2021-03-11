import React, { useContext, useState, useReducer } from 'react';
import reducer from './reducer';
import { CLEAR_ASSETS, REMOVE_ASSET } from './constant';

import { tempData } from './tempData';

const AppContext = React.createContext();
const ModalContext = React.createContext();

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
