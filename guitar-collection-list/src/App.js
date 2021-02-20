import Navbar from './components/Navbar';
import List from './components/List';
import { collection } from './collection';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(collection);

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <Navbar />
      <List items={items} onDelete={deleteItem} />
    </div>
  );
}
export default App;
