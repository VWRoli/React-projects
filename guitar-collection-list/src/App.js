import Navbar from './components/Navbar';
import List from './components/List';
import { collection } from './collection';
import { useState } from 'react';

function App() {
  const [item, setItem] = useState(collection);

  return (
    <div className="container">
      <Navbar />
      <List collection={item} />
    </div>
  );
}
export default App;
