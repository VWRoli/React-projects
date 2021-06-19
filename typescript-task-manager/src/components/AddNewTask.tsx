import { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  showAddTask: boolean;
  tasks: Props['tasks'];
  setTasks: React.Dispatch<React.SetStateAction<Props['tasks']>>;
}
const AddNewTask: React.FC<IProps> = ({ showAddTask, setTasks, tasks }) => {
  const [formData, setFormData] = useState({
    task: '',
    date: '',
    reminder: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'reminder') {
      setFormData({ ...formData, reminder: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!formData.task || !formData.date)
      return alert('You must fill out the form!');

    setTasks([
      ...tasks,
      { task: formData.task, date: formData.date, reminder: formData.reminder },
    ]);

    setFormData({
      task: '',
      date: '',
      reminder: false,
    });
  };

  return (
    <>
      {showAddTask && (
        <form className="add-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="task">Task</label>
            <input
              type="text"
              name="task"
              value={formData.task}
              placeholder="Add task"
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="date">Date & Time</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              placeholder="Add Date & Time"
              onChange={handleChange}
            />
          </div>
          <div className="form-control form-control-check">
            <label htmlFor="reminder">Set reminder</label>
            <input
              type="checkbox"
              checked={formData.reminder}
              name="reminder"
              onChange={handleChange}
            />
          </div>
          <button value="Save Task" className="btn btn-block">
            Add Task
          </button>
        </form>
      )}
    </>
  );
};

export default AddNewTask;
