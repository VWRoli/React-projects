import Tasks from './components/Tasks';
//CSS
import './App.css';
//Components
import AddNewTask from './components/AddNewTask';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

export interface IState {
  tasks: {
    task: string;
    date: string;
    reminder: boolean;
  }[];
}

const App = (): JSX.Element => {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState<IState['tasks']>([
    { task: 'learn typescript', date: 'by Monday', reminder: false },
  ]);

  return (
    <div className="container">
      <Header setShowAddTask={setShowAddTask} showAddTask={showAddTask} />
      <AddNewTask showAddTask={showAddTask} tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} />
      <Footer />
    </div>
  );
};

export default App;
