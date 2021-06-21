import { ActionType } from '../constants/actionTypes';
import { Action } from '../actions/Types';
import Todo from '../components/Todo';

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
      return [...state, action.payload];
    case ActionType.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case ActionType.UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
};

export default reducer;
