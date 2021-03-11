const reducer = (state, action) => {
  if (action.type === 'CLEAR_ASSETS') {
    return { ...state, assets: [] };
  }
  return state;
};
export default reducer;
