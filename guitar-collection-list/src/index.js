import React from 'react';
import ReactDOM from 'react-dom';
import { collection } from './collection';
import Navbar from './navbar';
import { UseStateArray } from './controller';

//CSS
import './css/index.css';

/* const UseStateArray = () => {
  const [item, setItem] = React.useState(collection);

  //Filter out guitars
  const myGuitars = collection.filter((item) => item.guitar && !item.wish);
  const guitarWish = collection.filter((item) => item.guitar && item.wish);
  const myAmps = collection.filter((item) => item.amp && !item.wish);
  const ampWish = collection.filter((item) => item.amp && item.wish);

  //console.log(myGuitars);

  return (
    <>
      {item.map((guitar) => {
        const { id, img, title } = guitar;
        return <ListItem key={id} {...guitar} />;
      })}
      <button className="btn-remove" onClick={() => setItem([])}>
        clear items
      </button>
    </>
  );
}; */

function GuitarList() {
  return (
    <>
      <h1>My Guitar Collection</h1>
      <Navbar />
      <section className="container">
        <UseStateArray />
      </section>
    </>
  );
}

ReactDOM.render(<GuitarList />, document.getElementById('root'));
