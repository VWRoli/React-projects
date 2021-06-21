import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../actions/todos';

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

  return (
    <div className={`task ${todo.completed ? 'reminder' : ''}`}>
      <h3>
        {todo.title} <FaTimes onClick={() => dispatch(deleteTodo(todo.id))} />
      </h3>
    </div>
  );
};

export default Todo;
