import { CLEAR_ASSETS, DISPLAY_INFO, LOADING, REMOVE_ASSET } from './constant';

const reducer = (state, action) => {
  if (action.type === CLEAR_ASSETS) {
    return { ...state, assets: [] };
  }
  if (action.type === REMOVE_ASSET) {
    return {
      ...state,
      assets: state.assets.filter((asset) => asset.id !== action.payload),
    };
  }
  if (action.type === LOADING) {
    return { ...state, isLoading: true };
  }
  if (action.type === DISPLAY_INFO) {
    return { ...state, coinInfo: action.payload, isLoading: false };
  }

  return state;
};
export default reducer;
