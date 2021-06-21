import { Dispatch } from 'redux';
import * as api from '../api';
import { ActionType } from '../constants/actionTypes';
import { Action, Todo } from './Types';

export const getTodos = () => async (dispatch: Dispatch<Action>) => {
  try {
    const response = await api.fetchTodos();

    const data = await response.json();

    dispatch({ type: ActionType.FETCH_TODOS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTodo =
  (todoData: Todo) => async (dispatch: Dispatch<Action>) => {
    try {
      const response = await api.createTodo(todoData);

      const data = await response.json();
      dispatch({ type: ActionType.CREATE_TODO, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteTodo =
  (id: number) => async (dispatch: Dispatch<Action>) => {
    try {
      const response = await api.deleteTodo(id);

      await response.json();

      dispatch({ type: ActionType.DELETE_TODO, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
