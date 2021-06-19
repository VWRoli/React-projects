import { FaTimes } from 'react-icons/fa';

interface IProps {
  task: {
    task: string;
    date: string;
    reminder: boolean;
  };
}

const Task: React.FC<IProps> = ({ task }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}>
      <h3>
        {task.task} <FaTimes />
      </h3>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
