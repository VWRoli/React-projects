import Navbar from './components/Navbar';
import List from './components/List';
import { collection } from './collection';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(collection);
  //Delete an item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  //Filter out guitars
  const filterGuitars = () => {
    const guitarsOnly = collection.filter((item) => item.guitar);
    setItems(guitarsOnly);
  };

  //Filter out guitars
  const filterAmps = () => {
    const ampsOnly = collection.filter((item) => item.amp);
    setItems(ampsOnly);
  };

  //Filter out guitars
  const showAll = () => {
    setItems(collection);
  };

  return (
    <div className="container">
      <Navbar func={filterGuitars} func2={filterAmps} func3={showAll} />
      <List items={items} onDelete={deleteItem} />
    </div>
  );
}
export default App;
