import { ActionType } from '../constants/actionTypes';

export type Todos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}[];
export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

interface FetchAction {
  type: ActionType.FETCH_TODOS;
  payload: Todos;
}

interface CreateAction {
  type: ActionType.CREATE_TODO;
  payload: Todo;
}

export type Action = FetchAction | CreateAction;
