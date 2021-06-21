import { FaTimes } from 'react-icons/fa';

type Props = {
  todo: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
};

const Todo: React.FC<Props> = ({ todo }) => {
  return (
    <div className={`task ${todo.completed ? 'reminder' : ''}`}>
      <h3>
        {todo.title} <FaTimes />
      </h3>
    </div>
  );
};

export default Todo;
