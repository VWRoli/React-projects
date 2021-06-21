import { ActionType } from '../constants/actionTypes';
import { Action } from '../actions/Types';

type Todos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}[];

const initialState: Todos = [];

const reducer = (state: Todos = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_TODOS:
      return [...action.payload];
    case ActionType.CREATE_TODO:
      console.log(action.payload);
      return [...state, action.payload];

    default:
      return state;
  }
};

export default reducer;
