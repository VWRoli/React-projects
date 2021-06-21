import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../actions/todos';
import { State } from '../reducers';
import Todo from './Todo';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: State) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
