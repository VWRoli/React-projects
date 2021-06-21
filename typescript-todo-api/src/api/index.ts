import { Todo } from '../actions/Types';

const url = 'http://localhost:5000/todos';

export const fetchTodos = (): Promise<Response> => fetch(url);
export const createTodo = (todoData: Todo): Promise<Response> =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(todoData),
  });
export const deleteTodo = (id: number): Promise<Response> =>
  fetch(`${url}/${id}`, {
    method: 'DELETE',
  });
