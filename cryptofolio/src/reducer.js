import {
  CLEAR_ASSETS,
  DISPLAY_INFO,
  GET_TOTALS,
  GET_TOTAL_CHANGE,
  LOADING,
  REMOVE_ASSET,
} from './constant';

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
    return { ...state, coinInfo: action.payload };
  }

  if (action.type === GET_TOTALS) {
    //Get the current value for the whole portfolio

    const currentAssetValue = state.assets
      .map((asset, i) => asset.holdings * state.coinInfo[i].current_price)
      .reduce((acc, cur) => acc + cur, 0);

    return { ...state, totalValue: currentAssetValue };
  }

  if (action.type === GET_TOTAL_CHANGE) {
    //Get the 24h price change for the whole portfolio
    const assetValueChange = state.assets
      .map((asset, i) => asset.holdings * state.coinInfo[i].price_change_24h)
      .reduce((acc, cur) => acc + cur, 0);

    return { ...state, totalValueChange: assetValueChange, isLoading: false };
  }

  return state;
};
export default reducer;
