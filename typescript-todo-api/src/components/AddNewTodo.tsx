import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../actions/todos';

interface IProps {
  showAddTodo: boolean;
}

const AddNewTodo: React.FC<IProps> = ({ showAddTodo }) => {
  const [todoText, setTodoText] = useState('');
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTodo = {
      title: todoText,
      completed,
      id: Date.now(),
      userId: 1,
    };

    dispatch(createTodo(newTodo));
    setTodoText('');
    setCompleted(false);
  };

  return (
    <>
      {showAddTodo && (
        <form className="add-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="todo">Todo</label>
            <input
              type="text"
              name="title"
              placeholder="Add todo"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
            />
          </div>

          <div className="form-control form-control-check">
            <label htmlFor="completed">Set completed</label>
            <input
              type="checkbox"
              name="completed"
              checked={completed}
              onChange={() => setCompleted(!completed)}
            />
          </div>
          <button value="Save Todo" className="btn btn-block">
            Add Todo
          </button>
        </form>
      )}
    </>
  );
};

export default AddNewTodo;
