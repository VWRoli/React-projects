import { useState } from 'react';

interface IProps {
  showAddTodo: boolean;
}

const AddNewTodo: React.FC<IProps> = ({ showAddTodo }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <>
      {showAddTodo && (
        <form className="add-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="todo">Todo</label>
            <input type="text" name="title" placeholder="Add todo" />
          </div>

          <div className="form-control form-control-check">
            <label htmlFor="completed">Set completed</label>
            <input type="checkbox" name="completed" />
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
