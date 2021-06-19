import './App.css';
import AddNewTask from './components/AddNewTask';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="container">
      <Header />
      <AddNewTask />
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
