import Task from './Task';
import { IState as Props } from '../App';

interface IProps {
  tasks: Props['tasks'];
}

const Tasks: React.FC<IProps> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, i) => (
        <Task key={i} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
