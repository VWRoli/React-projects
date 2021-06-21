import { useEffect, useState } from 'react';
import Todo from './Todo';

export interface IState {
  todos: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }[];
}

const Todos = () => {
  const [todos, setTodos] = useState<IState['todos']>([]);

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_page=1&_limit=5'
      );

      if (!response.ok) throw new Error(`${response.status} Todos not found`);

      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteTodo = async (id: number): Promise<void> => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { method: 'DELETE' }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default Todos;
