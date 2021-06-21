import { Todo } from '../actions/Types';

const url = 'http://localhost:5000/todos';

export const fetchTodos = (): Promise<Response> => fetch(url);
export const createTodo = (todoData: Todo): Promise<Response> => {
  console.log(JSON.stringify(todoData));
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(todoData),
  });
};
