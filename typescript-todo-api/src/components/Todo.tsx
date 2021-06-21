import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../actions/todos';

type Props = {
  todo: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
};

const Todo: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDoubleClick = (): void => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    dispatch(updateTodo(todo.id, updatedTodo));
  };

  return (
    <div
      className={`task ${todo.completed ? 'reminder' : ''}`}
      onDoubleClick={handleDoubleClick}>
      <h3>
        {todo.title} <FaTimes onClick={() => dispatch(deleteTodo(todo.id))} />
      </h3>
    </div>
  );
};

export default Todo;
