import { FaTimes } from 'react-icons/fa';

type Props = {
  deleteTodo: (id: number) => Promise<void>;
  todo: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
};

const Todo: React.FC<Props> = ({ todo, deleteTodo }) => {
  return (
    <div className="task">
      <h3>
        {todo.title} <FaTimes onClick={() => deleteTodo(todo.id)} />
      </h3>
    </div>
  );
};

export default Todo;
