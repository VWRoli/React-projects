import { useState } from 'react';
import './App.css';
import AddNewTodo from './components/AddNewTodo';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  const [showAddTodo, setShowAddTodo] = useState(true);

  return (
    <div className="container">
      <Header setShowAddTodo={setShowAddTodo} showAddTodo={showAddTodo} />
      <AddNewTodo showAddTodo={showAddTodo} />
      <Todos />
    </div>
  );
}

export default App;
